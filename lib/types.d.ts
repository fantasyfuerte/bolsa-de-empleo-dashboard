interface Permission {
  id: string;
  name: string;
  description?: string | null;
  roles: RolePermission[];
}

interface RolePermission {
  role_id: string;
  permission_id: string;
  assigned_at: Date;
  assigned_by?: string | null;
  role: Role;
  permission: Permission;
}

interface Role {
  id: string;
  name: string;
  description?: string | null;
  auth_infos: AuthInfo[];
  permissions: RolePermission[];
}

interface AuthInfo {
  id: string;
  user_id: string;
  is_verified: boolean;
  is_active: boolean;
  password: string;
  role_id?: string | null;
  role?: Role | null;
  sessions: Session[];
  created_at: Date;
  updated_at: Date;
}

interface Session {
  id: string;
  user_id: string;
  auth_info: AuthInfo;
  is_active: boolean;
  secret?: string | null;
  user_agent: string;
  ip_address?: string | null;
  last_used_at: Date;
  expires_at?: Date | null;
  configuration?: Configuration | null;
  created_at: Date;
  updated_at: Date;
}

interface Configuration {
  id: number;
  notifications: boolean;
  messages: boolean;
  session_id: string;
  session: Session;
}
// Custom

type User = {
  id: number;
  name: string;
  username: string;
  lastName: string;
  experience: string;
  status: string;
  clients: number;
  avatar: string;
  isAdmin: boolean;
  email: string;
  createdAt: string;
  updatedAt: string;
  ci: string;
  role: string | undefined;
  country: string;
  phone: string | undefined;
  address: string | undefined;
  emergencyContact: string | undefined;
  skinColor: string | undefined;
  gender: string | undefined;
  municipe: string | undefined;
  province: string | undefined;
  schoolLevel: string | undefined;
  desiredJobs: DesiredJobs;
  workExperience: WorkExperiece
    
};

type DesiredJobs = | {
        caretaker: boolean;
        nursing: boolean;
        cleaning: boolean;
        custodian: boolean;
      }

type WorkExperiece = {
  center: string;
  activity: string;
  phone: string;
  from: string;
  to: string;
}[]