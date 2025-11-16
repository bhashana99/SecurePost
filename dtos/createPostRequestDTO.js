export class CreatePostRequestDTO {
    constructor({title, content}) {
        if (!title) {
            throw new Error("Title is required");
        }

        this.title = title;
        this.content = content || null;

    }
}