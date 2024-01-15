export interface Reason {
  reason: string;
  votes: number;
}

export interface Profile {
  id: string;
  name: string;
  pic: string;
  description?: string;
  reasons: Array<Reason>;
  oinks?: number;
}
