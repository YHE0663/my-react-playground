"use client";
import { useParams } from "next/navigation";

export default function OrderDetails() {
  const { id } = useParams();
  return <div>{id}</div>;
}
