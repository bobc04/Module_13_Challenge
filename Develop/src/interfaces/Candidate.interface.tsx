// TODO: Create an interface for the Candidate objects returned by the API
// INTERFACE FOR GITHUB USER DATA FROM API
export interface Candidate {
    // BASIC USER INFORMATION
    id: number;
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    
    // PROFILE DETAILS
    bio: string | null;
    location: string | null;
    email: string | null;
    blog: string | null;
    company: string | null;
    
    // GITHUB STATISTICS
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    
    // ADDITIONAL METADATA
    hireable: boolean | null;
    type: 'User' | 'Organization';
    
    // REPOSITORY INFORMATION
    repositories?: {
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      fork_count: number;
      updated_at: string;
    }[];
    
    // OPTIONAL FIELDS FOR APPLICATION STATE
    isSaved?: boolean;
    notes?: string;
    lastContactDate?: string;
  }
  
  // HELPER TYPE FOR API RESPONSE
  export interface CandidateApiResponse {
    items: Candidate[];
    total_count: number;
  }
  
  // ERROR INTERFACE FOR API ERRORS
  export interface ApiError {
    message: string;
    documentation_url?: string;
    status?: number;
  }