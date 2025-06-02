import React from "react";
import { supabase } from "@/lib/supabase";

export default async function AdminTable() {
  const { data, error } = await supabase.from("products").select("*");
  return <div>AdminTable</div>;
}
