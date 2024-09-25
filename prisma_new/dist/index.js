"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("server is runing baby");
});
app.post("/add-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password, firstName, lastName, email } = req.body;
        const response = yield prisma.user.create({
            data: {
                userName,
                password,
                firstName,
                lastName,
                email
            }
        });
        res.send(response);
    }
    catch (error) {
        console.log("fucking error", error);
    }
}));
app.get("/get-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const response = yield prisma.user.findFirst({
            select: {
                firstName: true,
                lastName: true,
                userName: true
            },
            where: {
                id: userId
            }
        });
        res.send(response);
    }
    catch (error) {
        console.log("error found", error);
    }
}));
app.post("/add-todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, title, description } = req.body;
    try {
        const response = yield prisma.todo.create({
            data: {
                title,
                description,
                userId,
            }
        });
        res.send(response);
    }
    catch (error) {
        console.log("fucking error found", error);
    }
}));
app.get("/get-userandtodo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const response = yield prisma.todo.findMany({
        where: {
            userId
        },
        select: {
            title: true,
        }
    });
}));
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
