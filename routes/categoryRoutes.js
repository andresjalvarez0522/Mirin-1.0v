import express from "express";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/CategoryController.js";

const router = express.Router();

router.post(
  "/create-category",
  requireSingIn,
  isAdmin,
  createCategoryController
);

router.put(
  "/update-category/:id",
  requireSingIn,
  isAdmin,
  updateCategoryController
);

router.get("/get-category", categoryController);

router.get("/single-category/:slug", singleCategoryController);

router.delete(
  "/delete-category/:id",
  requireSingIn,
  isAdmin,
  deleteCategoryController
);

export default router;
