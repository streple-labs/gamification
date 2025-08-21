interface UserData {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  isVerified: boolean;
  otpVerified: boolean;
  role: string;
  bio: string | null;
  expectationFromStreple: string | null;
  howFamiliarWithTrading: string | null;
  hasAnswer: boolean;
  stats: Record<string, unknown> | null;
  performanceHistory: Record<string, unknown> | null;
  followerCount: number;
  demoFundingBalance: string;
  phase: string;
  level: string;
  hasAnswer: boolean;
}

interface GamificationData {
  phase: number;
  level: number;
  score: number;
  hasAnswer: boolean;
}
