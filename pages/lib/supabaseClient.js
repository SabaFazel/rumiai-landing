import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qeevvpzyhjlejchujkia.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXZ2cHp5aGpsZWpjaHVqa2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDkxODYsImV4cCI6MjA2MDAyNTE4Nn0.R6qhqEn02BKqDPXflnJ3Ixh4YznVYrCgNsXw0q0x6jo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
