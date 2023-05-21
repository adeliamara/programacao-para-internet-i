import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//import microblog from './Services/MicroBlog/MicroBlog';
import MicroblogPersistente from '../repositories/MicroBlogPersistente';

const microblog = new MicroblogPersistente();
import { Post } from '../models/Post';


app.get('/posts', async (req: Request, res: Response) => {
    const posts: Post[] = await microblog.retrieveAll();
    return res.status(200).json(posts);
});


app.get('/posts/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const post: Post | undefined = await microblog.retrieve(Number(id));
        return res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
    
})

app.delete('/posts/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await microblog.delete(Number(id));
        return res.status(204).send()
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
    
})

app.post('/posts', async (req: Request, res: Response) => {
    try {
      const { text } = req.body;
  
      if (!text) {
        return res.status(400).json({ error: 'O texto da postagem é obrigatório' });
      }
  
      const newPost: Post = new Post(text);
      const post: Post  = await microblog.create(newPost);

  
      return res.status(201).json(post);
    } catch (error) {
      console.error('Erro ao criar a postagem:', error);
      res.status(500).json({ error: 'Erro ao criar a postagem' });
    }
  });
  
app.patch('/posts/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post: Post | undefined = await microblog.retrieve(Number(id));
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const { text, likes } = req.body as { text?: string; likes?: number };

        post.text = text ?? post.text;
        post.likes = likes ?? post.likes;

        microblog.update(post);
        return res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.put('/posts/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post: Post | undefined = await microblog.retrieve(Number(id));

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const { text, likes } = req.body as { text?: string; likes?: number };


        if(!text || !likes){
            return res.status(405).send();
        }
        post.text =  text;
        post.likes =  likes;

        microblog.update(post);
        return res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
});


app.patch('/posts/:id/like', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post: Post | undefined = await microblog.retrieve(Number(id));

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        post.likes = post.likes + 1;

        microblog.update(post);
        return res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Aplicação escutando na porta ${port}`);
});
