import {Post} from "../models/Post";
import { exitCode } from "process";
 
const teste: Post = new Post("teste", 3,1)

 
class Microblog {
    private posts: Post[] = [teste];

  
    
    create(post: Post): void {
      this.posts.push(post);
    }
  
    retrieve(id: number): Post | undefined {
        const postBuscado: Post | undefined = this.posts.find((post) => post.id === id);
        if(postBuscado){
            return postBuscado;
        }
        throw new Error('Post not found');
        
        
    }
  
    update(updatedPost: Post): void {
      const index = this.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
      else{
        throw new Error('Post not found');
    }
    }
  
    delete(id: number): void {
      const index = this.posts.findIndex((post) => post.id === id);

      if (index !== -1) {
        this.posts.splice(index, 1);
      }
      else{
        throw new Error('Post not found');
    }
    }
  
    retrieveAll(): Post[] {
      return this.posts;
    }
  }
  
  const microblog: Microblog = new Microblog();

  export default microblog;