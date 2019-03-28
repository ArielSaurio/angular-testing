import { greet } from './nano greet';

describe ('greet',()=>{ // greet suit 
    it  ('should include the name in the message',()=>{
        expect (greet ('leticia')).toContain('leticia');
    })
})