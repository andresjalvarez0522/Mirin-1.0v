import express, { Router } from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfilController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.get("/test", requireSingIn, isAdmin, testController);
router.get("/user-auth", requireSingIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSingIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put("/profile", requireSingIn, updateProfilController);
router.get("/orders", requireSingIn, getOrdersController);
router.get("/all-orders", requireSingIn, isAdmin, getAllOrdersController);
router.put(
  "/orders-status:orderId",
  requireSingIn,
  isAdmin,
  orderStatusController
);

export default router;
