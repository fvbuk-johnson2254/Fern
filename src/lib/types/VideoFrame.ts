/*
to anyone who has stumbled across this god forsaken file in the codebase, please,
NEVER do this in a real application
i do not know WHY i didnt just use id: any
im sorry
*/
type UpperCase = 
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' 
  | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' 
  | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

type LowerCase = 
  | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' 
  | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' 
  | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

type Digit = 
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type SpecialChar = '_' | '-';

type AllowedChar = UpperCase | LowerCase | Digit | SpecialChar;

type VideoFrameID = 
  `${AllowedChar}${AllowedChar}${AllowedChar}${AllowedChar}${AllowedChar}
   ${AllowedChar}${AllowedChar}${AllowedChar}${AllowedChar}${AllowedChar}
   ${AllowedChar}`;

export type VideoFrame = {
    id: VideoFrameID
}