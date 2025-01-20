// /utils/errorHandler.ts
// Error handling utility functions

interface ErrorResponse {
  message: string;
  code?: string;
}

export const errorHandler = {
  parseError: (error: unknown): ErrorResponse => {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: 'An unknown error occurred' };
  },

  isNetworkError: (error: unknown): boolean => {
    return error instanceof Error && 
           'NetworkError' === error.name;
  }
}; 