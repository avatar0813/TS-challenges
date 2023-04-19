type Replace<O extends string, R extends string, T extends string> 
= R extends '' ? O 
:O extends `${infer F}${R}${infer L}` ? `${F}${T}${L}` : O 