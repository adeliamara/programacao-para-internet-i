import { Post } from "../models/Post";
import sqlite3, { Database, RunResult } from "sqlite3";

class MicroblogPersistente {
  private db: Database;

  constructor() {
    this.db = new sqlite3.Database("microblog.db");
    this.initializeDatabase();
  }

  private initializeDatabase(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.run(
        `CREATE TABLE IF NOT EXISTS posts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          text TEXT,
          likes int
        )`,
        (err: Error | null) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

create(post: Post): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.db.run(
        "INSERT INTO posts (text, likes) VALUES (?, ?)",
        [post.text, post.likes],
        function (err: Error | null) {
          if (err) {
            reject(err);
          } else {
            const createdPost = new Post(post.text, post.likes, this.lastID);
            resolve(createdPost);
          }
        }
      );
    });
  }
  

  retrieve(id: number): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      this.db.get(
        "SELECT * FROM posts WHERE id = ?",
        [id],
        (err: Error | null, row: any) => {
          if (err) {
            reject(err);
          } else if (row) {
            const post: Post = new Post(row.text, row.likes, row.id);
            resolve(post);
          } else {
            reject(new Error("Post not found"));
          }
        }
      );
    });
  }

  update(updatedPost: Post): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.run(
        "UPDATE posts SET text = ?, likes = ? WHERE id = ?",
        [updatedPost.text, updatedPost.likes, updatedPost.id],
        (err: Error | null) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  delete(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.run("DELETE FROM posts WHERE id = ?", [id], (err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  retrieveAll(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.db.all("SELECT * FROM posts", (err: Error | null, rows: any[]) => {
        if (err) {
          reject(err);
        } else {
          const posts: Post[] = rows.map((row) => new Post(row.text, row.content, row.id));
          resolve(posts);
        }
      });
    });
  }

  close(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.close((err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export default MicroblogPersistente;
