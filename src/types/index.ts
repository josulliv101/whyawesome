export interface Reason {
  reason: string;
  votes: number;
}

export interface Profile {
  name: string;
  pic: string;
  description?: string;
  reasons: Array<Reason>;
}
