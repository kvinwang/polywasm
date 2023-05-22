
// int_exprs.wast:6
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x01\x7f\x60\x02\x7e\x7e\x01\x7f\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xed\x80\x80\x80\x00\x04\x18\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x73\x5f\x6f\x66\x66\x73\x65\x74\x00\x00\x18\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x75\x5f\x6f\x66\x66\x73\x65\x74\x00\x01\x18\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x73\x5f\x6f\x66\x66\x73\x65\x74\x00\x02\x18\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x75\x5f\x6f\x66\x66\x73\x65\x74\x00\x03\x0a\xc9\x80\x80\x80\x00\x04\x8d\x80\x80\x80\x00\x00\x20\x00\x41\x01\x6a\x20\x01\x41\x01\x6a\x48\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x41\x01\x6a\x20\x01\x41\x01\x6a\x49\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x42\x01\x7c\x20\x01\x42\x01\x7c\x53\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x42\x01\x7c\x20\x01\x42\x01\x7c\x54\x0b");

// int_exprs.wast:18
assert_return(() => call($1, "i32.no_fold_cmp_s_offset", [2_147_483_647, 0]), 1);

// int_exprs.wast:19
assert_return(() => call($1, "i32.no_fold_cmp_u_offset", [-1, 0]), 1);

// int_exprs.wast:20
assert_return(() => call($1, "i64.no_fold_cmp_s_offset", [9_223_372_036_854_775_807n, 0n]), 1);

// int_exprs.wast:21
assert_return(() => call($1, "i64.no_fold_cmp_u_offset", [-1n, 0n]), 1);

// int_exprs.wast:25
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7e\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x07\x9d\x80\x80\x80\x00\x01\x19\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x77\x72\x61\x70\x5f\x65\x78\x74\x65\x6e\x64\x5f\x73\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\xa7\xac\x0b");

// int_exprs.wast:30
assert_return(() => call($2, "i64.no_fold_wrap_extend_s", [4_538_991_236_898_928n]), 1_079_009_392n);

// int_exprs.wast:31
assert_return(() => call($2, "i64.no_fold_wrap_extend_s", [45_230_338_458_316_960n]), -790_564_704n);

// int_exprs.wast:35
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7e\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x07\x9d\x80\x80\x80\x00\x01\x19\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x77\x72\x61\x70\x5f\x65\x78\x74\x65\x6e\x64\x5f\x75\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\xa7\xad\x0b");

// int_exprs.wast:40
assert_return(() => call($3, "i64.no_fold_wrap_extend_u", [4_538_991_236_898_928n]), 1_079_009_392n);

// int_exprs.wast:44
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xe1\x80\x80\x80\x00\x04\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x73\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x75\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x73\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x75\x00\x03\x0a\xbd\x80\x80\x80\x00\x04\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x01\x74\x41\x01\x75\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x01\x74\x41\x01\x76\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x01\x86\x42\x01\x87\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x01\x86\x42\x01\x88\x0b");

// int_exprs.wast:56
assert_return(() => call($4, "i32.no_fold_shl_shr_s", [-2_147_483_648]), 0);

// int_exprs.wast:57
assert_return(() => call($4, "i32.no_fold_shl_shr_u", [-2_147_483_648]), 0);

// int_exprs.wast:58
assert_return(() => call($4, "i64.no_fold_shl_shr_s", [-9_223_372_036_854_775_808n]), 0n);

// int_exprs.wast:59
assert_return(() => call($4, "i64.no_fold_shl_shr_u", [-9_223_372_036_854_775_808n]), 0n);

// int_exprs.wast:63
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xe1\x80\x80\x80\x00\x04\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x73\x5f\x73\x68\x6c\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x75\x5f\x73\x68\x6c\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x73\x5f\x73\x68\x6c\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x75\x5f\x73\x68\x6c\x00\x03\x0a\xbd\x80\x80\x80\x00\x04\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x01\x75\x41\x01\x74\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x01\x76\x41\x01\x74\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x01\x87\x42\x01\x86\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x01\x88\x42\x01\x86\x0b");

// int_exprs.wast:75
assert_return(() => call($5, "i32.no_fold_shr_s_shl", [1]), 0);

// int_exprs.wast:76
assert_return(() => call($5, "i32.no_fold_shr_u_shl", [1]), 0);

// int_exprs.wast:77
assert_return(() => call($5, "i64.no_fold_shr_s_shl", [1n]), 0n);

// int_exprs.wast:78
assert_return(() => call($5, "i64.no_fold_shr_u_shl", [1n]), 0n);

// int_exprs.wast:82
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xe1\x80\x80\x80\x00\x04\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x6d\x75\x6c\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x75\x5f\x6d\x75\x6c\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x6d\x75\x6c\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x75\x5f\x6d\x75\x6c\x00\x03\x0a\xbd\x80\x80\x80\x00\x04\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x06\x6d\x41\x06\x6c\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x06\x6e\x41\x06\x6c\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x06\x7f\x42\x06\x7e\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x06\x80\x42\x06\x7e\x0b");

// int_exprs.wast:94
assert_return(() => call($6, "i32.no_fold_div_s_mul", [1]), 0);

// int_exprs.wast:95
assert_return(() => call($6, "i32.no_fold_div_u_mul", [1]), 0);

// int_exprs.wast:96
assert_return(() => call($6, "i64.no_fold_div_s_mul", [1n]), 0n);

// int_exprs.wast:97
assert_return(() => call($6, "i64.no_fold_div_u_mul", [1n]), 0n);

// int_exprs.wast:101
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xe5\x80\x80\x80\x00\x04\x16\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x73\x65\x6c\x66\x00\x00\x16\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x75\x5f\x73\x65\x6c\x66\x00\x01\x16\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x73\x65\x6c\x66\x00\x02\x16\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x75\x5f\x73\x65\x6c\x66\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x7f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x80\x0b");

// int_exprs.wast:113
assert_trap(() => call($7, "i32.no_fold_div_s_self", [0]));

// int_exprs.wast:114
assert_trap(() => call($7, "i32.no_fold_div_u_self", [0]));

// int_exprs.wast:115
assert_trap(() => call($7, "i64.no_fold_div_s_self", [0n]));

// int_exprs.wast:116
assert_trap(() => call($7, "i64.no_fold_div_u_self", [0n]));

// int_exprs.wast:120
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xe5\x80\x80\x80\x00\x04\x16\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x73\x5f\x73\x65\x6c\x66\x00\x00\x16\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x75\x5f\x73\x65\x6c\x66\x00\x01\x16\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x73\x5f\x73\x65\x6c\x66\x00\x02\x16\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x75\x5f\x73\x65\x6c\x66\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x81\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x82\x0b");

// int_exprs.wast:132
assert_trap(() => call($8, "i32.no_fold_rem_s_self", [0]));

// int_exprs.wast:133
assert_trap(() => call($8, "i32.no_fold_rem_u_self", [0]));

// int_exprs.wast:134
assert_trap(() => call($8, "i64.no_fold_rem_s_self", [0n]));

// int_exprs.wast:135
assert_trap(() => call($8, "i64.no_fold_rem_u_self", [0n]));

// int_exprs.wast:139
let $9 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xe1\x80\x80\x80\x00\x04\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x73\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x75\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x73\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x75\x00\x03\x0a\xbd\x80\x80\x80\x00\x04\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x06\x6c\x41\x06\x6d\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x41\x06\x6c\x41\x06\x6e\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x06\x7e\x42\x06\x7f\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x42\x06\x7e\x42\x06\x80\x0b");

// int_exprs.wast:151
assert_return(() => call($9, "i32.no_fold_mul_div_s", [-2_147_483_648]), 0);

// int_exprs.wast:152
assert_return(() => call($9, "i32.no_fold_mul_div_u", [-2_147_483_648]), 0);

// int_exprs.wast:153
assert_return(() => call($9, "i64.no_fold_mul_div_s", [-9_223_372_036_854_775_808n]), 0n);

// int_exprs.wast:154
assert_return(() => call($9, "i64.no_fold_mul_div_u", [-9_223_372_036_854_775_808n]), 0n);

// int_exprs.wast:158
let $10 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x32\x00\x00\x13\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x32\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x41\x02\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x02\x7f\x0b");

// int_exprs.wast:166
assert_return(() => call($10, "i32.no_fold_div_s_2", [-11]), -5);

// int_exprs.wast:167
assert_return(() => call($10, "i64.no_fold_div_s_2", [-11n]), -5n);

// int_exprs.wast:171
let $11 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x73\x5f\x32\x00\x00\x13\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x73\x5f\x32\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x41\x02\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x02\x81\x0b");

// int_exprs.wast:179
assert_return(() => call($11, "i32.no_fold_rem_s_2", [-11]), -1);

// int_exprs.wast:180
assert_return(() => call($11, "i64.no_fold_rem_s_2", [-11n]), -1n);

// int_exprs.wast:184
let $12 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x30\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x30\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x30\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x30\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x00\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x00\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x00\x7f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x00\x80\x0b");

// int_exprs.wast:196
assert_trap(() => call($12, "i32.div_s_0", [71]));

// int_exprs.wast:197
assert_trap(() => call($12, "i32.div_u_0", [71]));

// int_exprs.wast:198
assert_trap(() => call($12, "i64.div_s_0", [71n]));

// int_exprs.wast:199
assert_trap(() => call($12, "i64.div_u_0", [71n]));

// int_exprs.wast:203
let $13 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x33\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x33\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x33\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x33\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x03\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x03\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x03\x7f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x03\x80\x0b");

// int_exprs.wast:215
assert_return(() => call($13, "i32.div_s_3", [71]), 23);

// int_exprs.wast:216
assert_return(() => call($13, "i32.div_s_3", [1_610_612_736]), 536_870_912);

// int_exprs.wast:217
assert_return(() => call($13, "i32.div_u_3", [71]), 23);

// int_exprs.wast:218
assert_return(() => call($13, "i32.div_u_3", [-1_073_741_824]), 1_073_741_824);

// int_exprs.wast:219
assert_return(() => call($13, "i64.div_s_3", [71n]), 23n);

// int_exprs.wast:220
assert_return(() => call($13, "i64.div_s_3", [3_458_764_513_820_540_928n]), 1_152_921_504_606_846_976n);

// int_exprs.wast:221
assert_return(() => call($13, "i64.div_u_3", [71n]), 23n);

// int_exprs.wast:222
assert_return(() => call($13, "i64.div_u_3", [-4_611_686_018_427_387_904n]), 4_611_686_018_427_387_904n);

// int_exprs.wast:226
let $14 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x35\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x35\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x35\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x35\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x05\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x05\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x05\x7f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x05\x80\x0b");

// int_exprs.wast:238
assert_return(() => call($14, "i32.div_s_5", [71]), 14);

// int_exprs.wast:239
assert_return(() => call($14, "i32.div_s_5", [1_342_177_280]), 268_435_456);

// int_exprs.wast:240
assert_return(() => call($14, "i32.div_u_5", [71]), 14);

// int_exprs.wast:241
assert_return(() => call($14, "i32.div_u_5", [-1_610_612_736]), 536_870_912);

// int_exprs.wast:242
assert_return(() => call($14, "i64.div_s_5", [71n]), 14n);

// int_exprs.wast:243
assert_return(() => call($14, "i64.div_s_5", [5_764_607_523_034_234_880n]), 1_152_921_504_606_846_976n);

// int_exprs.wast:244
assert_return(() => call($14, "i64.div_u_5", [71n]), 14n);

// int_exprs.wast:245
assert_return(() => call($14, "i64.div_u_5", [-6_917_529_027_641_081_856n]), 2_305_843_009_213_693_952n);

// int_exprs.wast:249
let $15 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x37\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x37\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x37\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x37\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x07\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x07\x6e\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x07\x7f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x07\x80\x0b");

// int_exprs.wast:261
assert_return(() => call($15, "i32.div_s_7", [71]), 10);

// int_exprs.wast:262
assert_return(() => call($15, "i32.div_s_7", [1_879_048_192]), 268_435_456);

// int_exprs.wast:263
assert_return(() => call($15, "i32.div_u_7", [71]), 10);

// int_exprs.wast:264
assert_return(() => call($15, "i32.div_u_7", [-536_870_912]), 536_870_912);

// int_exprs.wast:265
assert_return(() => call($15, "i64.div_s_7", [71n]), 10n);

// int_exprs.wast:266
assert_return(() => call($15, "i64.div_s_7", [8_070_450_532_247_928_832n]), 1_152_921_504_606_846_976n);

// int_exprs.wast:267
assert_return(() => call($15, "i64.div_u_7", [71n]), 10n);

// int_exprs.wast:268
assert_return(() => call($15, "i64.div_u_7", [-2_305_843_009_213_693_952n]), 2_305_843_009_213_693_952n);

// int_exprs.wast:272
let $16 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x5f\x33\x00\x00\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x5f\x33\x00\x01\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x5f\x33\x00\x02\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x5f\x33\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x03\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x03\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x03\x81\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x03\x82\x0b");

// int_exprs.wast:284
assert_return(() => call($16, "i32.rem_s_3", [71]), 2);

// int_exprs.wast:285
assert_return(() => call($16, "i32.rem_s_3", [1_610_612_736]), 0);

// int_exprs.wast:286
assert_return(() => call($16, "i32.rem_u_3", [71]), 2);

// int_exprs.wast:287
assert_return(() => call($16, "i32.rem_u_3", [-1_073_741_824]), 0);

// int_exprs.wast:288
assert_return(() => call($16, "i64.rem_s_3", [71n]), 2n);

// int_exprs.wast:289
assert_return(() => call($16, "i64.rem_s_3", [3_458_764_513_820_540_928n]), 0n);

// int_exprs.wast:290
assert_return(() => call($16, "i64.rem_u_3", [71n]), 2n);

// int_exprs.wast:291
assert_return(() => call($16, "i64.rem_u_3", [-4_611_686_018_427_387_904n]), 0n);

// int_exprs.wast:295
let $17 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x5f\x35\x00\x00\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x5f\x35\x00\x01\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x5f\x35\x00\x02\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x5f\x35\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x05\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x05\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x05\x81\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x05\x82\x0b");

// int_exprs.wast:307
assert_return(() => call($17, "i32.rem_s_5", [71]), 1);

// int_exprs.wast:308
assert_return(() => call($17, "i32.rem_s_5", [1_342_177_280]), 0);

// int_exprs.wast:309
assert_return(() => call($17, "i32.rem_u_5", [71]), 1);

// int_exprs.wast:310
assert_return(() => call($17, "i32.rem_u_5", [-1_610_612_736]), 0);

// int_exprs.wast:311
assert_return(() => call($17, "i64.rem_s_5", [71n]), 1n);

// int_exprs.wast:312
assert_return(() => call($17, "i64.rem_s_5", [5_764_607_523_034_234_880n]), 0n);

// int_exprs.wast:313
assert_return(() => call($17, "i64.rem_u_5", [71n]), 1n);

// int_exprs.wast:314
assert_return(() => call($17, "i64.rem_u_5", [-6_917_529_027_641_081_856n]), 0n);

// int_exprs.wast:318
let $18 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xb9\x80\x80\x80\x00\x04\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x5f\x37\x00\x00\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x5f\x37\x00\x01\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x5f\x37\x00\x02\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x5f\x37\x00\x03\x0a\xb1\x80\x80\x80\x00\x04\x87\x80\x80\x80\x00\x00\x20\x00\x41\x07\x6f\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x41\x07\x70\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x07\x81\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x07\x82\x0b");

// int_exprs.wast:330
assert_return(() => call($18, "i32.rem_s_7", [71]), 1);

// int_exprs.wast:331
assert_return(() => call($18, "i32.rem_s_7", [1_879_048_192]), 0);

// int_exprs.wast:332
assert_return(() => call($18, "i32.rem_u_7", [71]), 1);

// int_exprs.wast:333
assert_return(() => call($18, "i32.rem_u_7", [-536_870_912]), 0);

// int_exprs.wast:334
assert_return(() => call($18, "i64.rem_s_7", [71n]), 1n);

// int_exprs.wast:335
assert_return(() => call($18, "i64.rem_s_7", [8_070_450_532_247_928_832n]), 0n);

// int_exprs.wast:336
assert_return(() => call($18, "i64.rem_u_7", [71n]), 1n);

// int_exprs.wast:337
assert_return(() => call($18, "i64.rem_u_7", [-2_305_843_009_213_693_952n]), 0n);

// int_exprs.wast:341
let $19 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x31\x00\x00\x14\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x31\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x41\x7f\x6d\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x42\x7f\x7f\x0b");

// int_exprs.wast:349
assert_trap(() => call($19, "i32.no_fold_div_neg1", [-2_147_483_648]));

// int_exprs.wast:350
assert_trap(() => call($19, "i64.no_fold_div_neg1", [-9_223_372_036_854_775_808n]));