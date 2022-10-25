import { Routes, Route } from "react-router-dom";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { ConfirmedOrderPage } from "./pages/ConfirmedOrder";
import { HomePage } from "./pages/Home";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/CompleteOrder" element={<CompleteOrderPage />}/>
      <Route path="/ConfirmedOrder" element={<ConfirmedOrderPage />}/>
    </Routes>
  )
}