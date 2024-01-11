export class Customer {
    public id: string | undefined;
    public cpf: string | undefined;
    public name: string | undefined;
    public phone1: string | undefined;
    public phone2: string | undefined;
    public phone3: string | undefined;
    public email1: string | undefined;
    public email2: string | undefined;

    constructor()
    constructor(
        id?: string,
        cpf?: string,
        name?: string,
        phone1?: string,
        phone2?: string,
        phone3?: string,
        email1?: string,
        email2?: string
    ) {
        this.id = id;
        this.cpf = cpf;
        this.name = name;
        this.phone1 = phone1;
        this.phone2 = phone2;
        this.phone3 = phone3;
        this.email1 = email1;
        this.email2 = email2;
    }
}        