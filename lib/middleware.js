import express from "express";
import cors from "cors";

const configureMiddleware = (app) => {
    app.use(cors);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

export default configureMiddleware;