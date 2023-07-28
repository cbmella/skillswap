import { createApp } from "../app";
import request from "supertest";


describe("User Routes", () => {
    test("should create a new user", async () => {
        const app = createApp();
        const newUser = {
            name: "Test User",
            email: "testuser@example.com",
            location: "Test Location",
            skillsCanTeach: ["skill1", "skill2"],
            skillsWantToLearn: ["skill3", "skill4"],
        };
        const response = await request(app).post("/users").send(newUser);
        expect(response.status).toBe(201);
    }, 20000);
});
