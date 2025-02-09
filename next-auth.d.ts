declare module "next-auth" {
    interface Session {
        user: {
            id: String;
        } & DefaultSession["user"];
    }
}

export {};