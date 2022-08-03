let s1, s2, i = 0, j, k, l = 0, A, B;

s1 = prompt("nhap a:", "");
s2 = prompt("nhap b:", "");

s1 = Number(st1);
s2 = Number(st2);

if (s1 < 0 && s2 < 0) {
    document.write('khong co so nguyen to');

} else if (s1 > s2 && s1 > 0 && s2 > 0) {
    B = s1; A = s2;
} else if (s1 > st2 && s2 < 0) {
    B = s1; A = 1;
} else if (s2 > s1 && s1 > 0 && s2 > 0) {
    A = s1; B = s2;
} else if (s2 > st1 && s1 < 0) {
    B = s2; A = 1;
}
for (j = A; j <= B; j++) {
    l = 0;
    for (k = 2; k <= j / 2; k++) {
        if (j % k == 0) {
            l++;
        }
    }
    if ((l == 0 || j == 2) && j != 1) {
        document.write(j);
        document.write('<br/>')
    }
}
