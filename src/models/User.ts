
export default class User{
    private id: number;
    private name: string;

    public constructor(_userName: string){
        this.name = _userName;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}