// File: /lib/dashboard.ts
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore"
import type { DashboardData } from "@/types/dashboard"

export async function getDashboardData(userId: string): Promise<DashboardData> {
  try {
    // Get user credits
    const userDoc = await db.collection("users").doc(userId).get()
    const userData = userDoc.data()

    // Get recent activities
    const activitiesRef = collection(db, "activities")
    const q = query(
      activitiesRef,
      where("userId", "==", userId),
      orderBy("timestamp", "desc"),
      limit(50)
    )
    const activitiesSnapshot = await getDocs(q)
    const activities = activitiesSnapshot.docs.map(doc => doc.data())

    return {
      totalCredits: userData?.credits || 0,
      referralCredits: userData?.referralCredits || 0,
      totalReferrals: userData?.totalReferrals || 0,
      activities,
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    return {
      totalCredits: 0,
      referralCredits: 0,
      totalReferrals: 0,
      activities: [],
    }
  }
}
