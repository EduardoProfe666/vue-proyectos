import {ref, Ref} from "vue";
import Post from "@/components/posts/post.model";

export default class PostService {
    private readonly posts: Ref<Post[]>

    constructor() {
        this.posts = ref([
            {id: 1, title: "Primer Post", content: "Contenido del primer post.", starred: false},
            {id: 2, title: "Segundo Post", content: "Contenido del segundo post.", starred: false},
            {id: 3, title: "Tercer Post", content: "Contenido del tercer post.", starred: true},
            {id: 4, title: "Cuarto Post", content: "Contenido del cuarto post.", starred: false},
            {id: 5, title: "Quinto Post", content: "Contenido del quinto post.", starred: false},
            {id: 6, title: "Sexto Post", content: "Contenido del sexto post.", starred: false},
            {id: 7, title: "Séptimo Post", content: "Contenido del séptimo post.", starred: false},
            {id: 8, title: "Octavo Post", content: "Contenido del octavo post.", starred: false},
            {id: 9, title: "Noveno Post", content: "Contenido del noveno post.", starred: false},
            {id: 10, title: "Décimo Post", content: "Contenido del décimo post.", starred: false}
        ]);
    }

    getPosts(): Ref<Post[]> {
        return this.posts;
    }

    startPost(idPost: number): void {
        const post = this.posts.value.find(x => x.id === idPost);
        if(post)
            post.starred = !post.starred;
    }
}