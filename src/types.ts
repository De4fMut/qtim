export interface Post {
    id: string;
    createdAt: string;
    title: string;
    preview: string;
    image: string;
    description: string;
    query?: string;
    operationName?: string;
    variables?: string;
}