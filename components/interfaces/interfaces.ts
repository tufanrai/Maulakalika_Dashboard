// Registration interface
export interface IRegister {
  name: string;
  email: string;
  contact: string;
  role: string;
  password: string;
  c_password: string;
}

// Roles
export enum IRoles {
  admin = "Admin",
  user = "User",
}

// Login interface
export interface ILogin {
  email: string;
  password: string;
}

// file upload
export interface IUpload {
  title: string;
  description: string;
  file: File;
  type: string;
}

export interface IDownload {
  _id: string;
  title: string;
  description: string;
  file: File;
  url: string;
  updatedAt: string;
}

// image upload
export interface IImage {
  image: File;
}

// file type enum
export enum ETypes {
  events = "Event",
  downloads = "Downloads",
  news = "News",
  projects = "Projects",
}

// admin's data
export interface IAdmin {
  name?: string;
  email?: string;
  contact?: string;
  id?: string;
}
