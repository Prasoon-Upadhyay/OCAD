export interface Model {

    _id: string
    name: string,
    description: string,
    publishedBy: string,
    modelFile: string,
    glbFile: string,
    fileSize: number,
    postedOn: Date
}

export interface Request {

    modelName: string, 
    modelDescription: string,
    postedOn: Date
    status: "Seen" | "Posted" | "Resolved",
    contact ?: string,
    requestedBy: string,
    upvotes: number
    model ?: Model

}

export interface ErrorInterface {

    message: string,
    code: number,
    type: string,
    timestamp: Date | null
}