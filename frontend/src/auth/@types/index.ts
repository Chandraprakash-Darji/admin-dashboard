interface BaseUserIn {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    last_login: Date;
    role: "student" | "admin" | "teacher";

}

export interface StudentIn extends BaseUserIn {
    role: "student";
    cource: string;
    courceId: string;
}
