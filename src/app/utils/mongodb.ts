import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://earlclaro:July82001Claro@cluster0.myucw.mongodb.net/to_do_list?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "to_do_list";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export async function getDatabase(collectionName: string) {
    try {
        await client.connect();
        const db = await client.db(dbName);
        const collection = await db.collection(collectionName);
        
        return collection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

