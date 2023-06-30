# Markdown in LaTeX should not be rendered

## "em" in LaTeX

`*...*` in LaTeX code should not be italic:

$$
*f(x)* = 5
\tag{1}
$$

`_..._` in LaTeX code should not be italic:

$$
_f(x)_ = 5
\tag{2}
$$

Another example form [docsify#646](https://github.com/docsifyjs/docsify/issues/646):

$\{x_n\}$，$\lim\limits_{n \rightarrow \infty} x_n = a$

## "strong" in LaTeX

`**...**` in LaTeX code should not be bold:

$$
E = **mc^2**
\tag{3}
$$

`__...__` in LaTeX code should not be bold:

$$
E = __mc^2__
\tag{4}
$$

## `\\` support

$$
a = b \\
c = d
$$

So this: $
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
$

## HTML

This URL: $
\href{https://katex.org/}{\KaTeX}
$

## Table

| |
|:-------------------------------------------------------|
|$\displaystyle\sum_{i=1}^n$ `\displaystyle\sum_{i=1}^n`
|$\textstyle\sum_{i=1}^n$ `\textstyle\sum_{i=1}^n`
|$\scriptstyle x$ `\scriptstyle x` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(The size of a first sub/superscript)
|$\scriptscriptstyle x$ `\scriptscriptstyle x` (The size of subsequent sub/superscripts)
|$\lim\limits_x$ `\lim\limits_x`
|$\lim\nolimits_x$ `\lim\nolimits_x`
|$\verb!x^2!$ `\verb!x^2!`

## Comments and begin with KaTeX

<!--
bla
bla
bla
-->

$$
a = b
$$

## Special cases

The second argument of `\raisebox` can contain math if it is nested within `$…$` delimiters, as in `\raisebox{0.25em}{$\frac a b$}`

$\left(\LARGE{AB}\right)$ `\left(\LARGE{AB}\right)`

$`$ <code>`</code>

||||
|-|-|-|
|\\_|$\_$||
|\\\`|$\text{\`{a}}$|<code>\text{\\'{a}}</code>|



# mermaid

## Flowchart

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Sequence diagram

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice -> John: Hello John, how are you?
    loop Healthcheck
        John -> John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br> prevail...
    John -> Alice: Great!
    John -> Bob: How about you?
    Bob -> John: Jolly good!
```

## Gantt diagram

```mermaid
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
```


# Support table

<!-- copied from https://raw.githubusercontent.com/Khan/KaTeX/master/docs/support_table.md -->

See also: https://katex.org/docs/support_table.html.

This is a list of TeX functions, sorted alphabetically. This list includes functions that KaTeX supports and some that it doesn't support. There is a similar page, with functions [sorted by type](supported.md).

If you know the shape of a character, but not its name, [Detexify](http://detexify.kirelabs.org/classify.html) can help.

<style>
table tr,
table td {
    vertical-align: middle;
}
</style>

## Symbols

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\!|$n!$|`n!`|
|\\\!|$a\!b$|`a\!b`|
|#|$\def\bar#1{#1^2} \bar{y}$|`\def\bar#1{#1^2} \bar{y}`|
|\\#|$\#$||
|%||`%this is a comment`|
|\\%|$\%$||
|&|$\begin{matrix} a & b\cr c & d \end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\\&|$\&$||
|'|$'$||
|\\\'|$\text{\'{a}}$|`\text{\'{a}}`|
|(|$($||
|)|$)$||
|\\\(…\\\)|$\text{\(\frac a b\)}$|`\text{\(\frac a b\)}`|
|\\ |$a\ b$|`a\ b`|
|\\"|$\text{\"{a}}$|`\text{\"{a}}`|
|\\$|$\text{\textdollar}$||
|\\,|$a\,\,{b}$|`a\,\,{b}`|
|\\.|$\text{\.{a}}$|`\text{\.{a}}`|
|\\:|$a\:\:{b}$|`a\:\:{b}`|
|\\;|$a\;\;{b}$|a`\;\;{b}`|
|_|$x_i$|`x_i`|
|\\_|$\_$||
|\\<code>`</code>|$\text{\`{a}}$|<code>\text{\\'{a}}</code>|
|&#060;|$<$||
|\\=|$\text{\={a}}$|`\text{\\={a}}`|
| >|$>$||
|\\>|$a\>\>{b}$|`a\>\>{b}`|
|\[|$[$||
|\]|$]$||
|{|${a}$|`{a}`|
|}|${a}$|`{a}`|
|\\{|$\{$||
|\\}|$\}$||
|&#124;|$\vert$||
|\\&#124;|$\Vert$||
|~|$\text{no~no~no~breaks}$|`\text{no~no~no~breaks}`|
|\\~|$\text{\~{a}}$|`\text{\\~{a}}`|
|\\\\|$\begin{matrix} a & b\\ c & d\end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|^|$x^i$|`x^i`|
|\\^|$\text{\^{a}}$|`\text{\\^{a}}`|

## A

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\AA|$\text{\AA}$|`\text{\AA}`|
|\aa|$\text{\aa}$|`\text{\aa}`|
|\above|${a \above{2pt} b+1}$|`{a \above{2pt} b+1}`|
|\abovewithdelims|<span style="color:firebrick;">Not supported</span>||
|\acute|$\acute e$|`\acute e`|
|\AE|$\text{\AE}$|`\text{\AE}`|
|\ae|$\text{\ae}$|`\text{\ae}`|
|\alef|$\alef$||
|\alefsym|$\alefsym$||
|\aleph|$\aleph$||
|{align}|<span style="color:firebrick;">Not supported</span>|see `{aligned}`|
|{aligned}|$\begin{aligned}a&=b+c\\d+e&=f\end{aligned}$|`\begin{aligned}`<br>&nbsp;&nbsp;&nbsp;`a&=b+c \\`<br>&nbsp;&nbsp;&nbsp;`d+e&=f`<br>`\end{aligned}`|
|{alignat}|<span style="color:firebrick;">Not supported</span>|see `{alignedat}`|
|{alignedat}|$\begin{alignedat}{2}10&x+&3&y=2\\3&x+&13&y=4\end{alignedat}$|`\begin{alignedat}{2}`<br>&nbsp;&nbsp;&nbsp;`10&x+ &3&y = 2 \\`<br>&nbsp;&nbsp;&nbsp;` 3&x+&13&y = 4`<br>`\end{alignedat}`|
|\allowbreak|||
|\Alpha|$\Alpha$||
|\alpha|$\alpha$||
|\amalg|$\amalg$||
|\And|$\And$||
|\and|<span style="color:firebrick;">Not supported</span>|[Deprecated](https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax)|
|\ang|<span style="color:firebrick;">Not supported</span>|[Deprecated](https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax)|
|\angl|<span style="color:firebrick;">Not supported</span>||
|\angle|$\angle$||
|\approx|$\approx$||
|\approxeq|$\approxeq$||
|\arccos|$\arccos$||
|\arcctg|$\arcctg$||
|\arcsin|$\arcsin$||
|\arctan|$\arctan$||
|\arctg|$\arctg$||
|\arg|$\arg$||
|\argmax|$\argmax$||
|\argmin|$\argmin$||
|{array}|$\begin{array}{cc}a&b\\c&d\end{array}$ | `\begin{array}{cc}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{array}`|
|\array|<span style="color:firebrick;">Not supported</span>|see `{array}`|
|\arraystretch|$\def\arraystretch{1.5}\begin{array}{cc}a&b\\c&d\end{array}$|`\def\arraystretch{1.5}`<br>`\begin{array}{cc}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{array}`|
|\Arrowvert|<span style="color:firebrick;">Not supported</span>||
|\arrowvert|<span style="color:firebrick;">Not supported</span>||
|\ast|$\ast$||
|\asymp|$\asymp$||
|\atop|${a \atop b}$|`{a \atop b}`|
|\atopwithdelims|<span style="color:firebrick;">Not supported</span>||

## B

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\backepsilon|$\backepsilon$||
|\backprime|$\backprime$||
|\backsim|$\backsim$||
|\backsimeq|$\backsimeq$||
|\backslash|$\backslash$||
|\bar|$\bar{y}$|`\bar{y}`|
|\barwedge|$\barwedge$||
|\Bbb|$\Bbb{ABC}$|`\Bbb{ABC}`<br>KaTeX supports A-Z & k|
|\Bbbk|$\Bbbk$||
|\bbox|<span style="color:firebrick;">Not supported</span>||
|\bcancel|$\bcancel{5}$|`\bcancel{5}`|
|\because|$\because$||
|\begin|$\begin{matrix} a & b\\ c & d\end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\begingroup|$\begingroup a}$|`\begingroup a}`|
|\Beta|$\Beta$||
|\beta|$\beta$||
|\beth|$\beth$||
|\between|$\between$||
|\bf|$\bf AaBb12$|`\bf AaBb12`|
|\bfseries|<span style="color:firebrick;">Not supported</span>||
|\big|$\big(\big)$|`\big(\big)`|
|\Big|$\Big(\Big)$|`\Big(\Big)`|
|\bigcap|$\bigcap$||
|\bigcirc|$\bigcirc$||
|\bigcup|$\bigcup$||
|\bigg|$\bigg(\bigg)$|`\bigg(\bigg)`|
|\Bigg|$\Bigg(\Bigg)$|`\Bigg(\Bigg)`|
|\biggl|$\biggl($|`\biggl(`|
|\Biggl|$\Biggl($|`\Biggl(`|
|\biggm|$\biggm\vert$|`\biggm\vert`|
|\Biggm|$\Biggm\vert$|`\Biggm\vert`|
|\biggr|$\biggr)$|`\biggr)`|
|\Biggr|$\Biggr)$|`\Biggr)`|
|\bigl|$\bigl($|`\bigl(`|
|\Bigl|$\Bigl($|`\Bigl(`|
|\bigm|$\bigm\vert$|`\bigm\vert`|
|\Bigm|$\Bigm\vert$|`\Bigm\vert`|
|\bigodot|$\bigodot$||
|\bigominus|<span style="color:firebrick;">Not supported</span>|[Issue #1222](https://github.com/KaTeX/KaTeX/issues/1222)|
|\bigoplus|$\bigoplus$||
|\bigoslash|<span style="color:firebrick;">Not supported</span>|[Issue #1222](https://github.com/KaTeX/KaTeX/issues/1222)|
|\bigotimes|$\bigotimes$||
|\bigr|$\bigr)$|`\bigr)`|
|\Bigr|$\Bigr)$|`\Bigr)`|
|\bigsqcap|<span style="color:firebrick;">Not supported</span>|[Issue #1222](https://github.com/KaTeX/KaTeX/issues/1222)|
|\bigsqcup|$\bigsqcup$||
|\bigstar|$\bigstar$||
|\bigtriangledown|$\bigtriangledown$||
|\bigtriangleup|$\bigtriangleup$||
|\biguplus|$\biguplus$||
|\bigvee|$\bigvee$||
|\bigwedge|$\bigwedge$||
|\binom|$\binom n k$|`\binom n k`|
|\blacklozenge|$\blacklozenge$||
|\blacksquare|$\blacksquare$||
|\blacktriangle|$\blacktriangle$||
|\blacktriangledown|$\blacktriangledown$||
|\blacktriangleleft|$\blacktriangleleft$||
|\blacktriangleright|$\blacktriangleright$||
|\bm|$\bm{AaBb}$|`\bm{AaBb}`|
|{Bmatrix}|$\begin{Bmatrix}a&b\\c&d\end{Bmatrix}$|`\begin{Bmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{Bmatrix}`|
|{bmatrix}|$\begin{bmatrix}a&b\\c&d\end{bmatrix}$|`\begin{bmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{bmatrix}`|
|\bmod|$a \bmod b$|`a \bmod b`|
|\bold|$\bold{AaBb123}$|`\bold{AaBb123}`|
|\boldsymbol|$\boldsymbol{AaBb}$|`\boldsymbol{AaBb}`|
|\bot|$\bot$||
|\bowtie|$\bowtie$||
|\Box|$\Box$||
|\boxdot|$\boxdot$||
|\boxed|$\boxed{ab}$|`\boxed{ab}`|
|\boxminus|$\boxminus$||
|\boxplus|$\boxplus$||
|\boxtimes|$\boxtimes$||
|\Bra|$\left\langle\psi\right\|$|`\Bra{\psi}`|
|\bra|$\mathinner{\langle{\psi}\|}$|`\bra{\psi}`|
|\braket|$\mathinner{\langle{\phi\|\psi}\rangle}$|`\braket{\phi|\psi}`|
|\brace|${n\brace k}$|`{n\brace k}`|
|\bracevert|<span style="color:firebrick;">Not supported</span>||
|\brack|${n\brack k}$|`{n\brack k}`|
|\breve|$\breve{eu}$|`\breve{eu}`|
|\buildrel|<span style="color:firebrick;">Not supported</span>||
|\bull|$\bull$||
|\bullet|$\bullet$||
|\Bumpeq|$\Bumpeq$||
|\bumpeq|$\bumpeq$||

## C

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\C|<span style="color:firebrick;">Not supported</span>|[Deprecated](https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax)|
|\cal|$\cal AaBb123$|`\cal AaBb123`|
|\cancel|$\cancel{5}$|`\cancel{5}`|
|\cancelto|<span style="color:firebrick;">Not supported</span>||
|\Cap|$\Cap$||
|\cap|$\cap$||
|{cases}|$\begin{cases}a&\text{if }b\\c&\text{if }d\end{cases}$|`\begin{cases}`<br>&nbsp;&nbsp;&nbsp;`a &\text{if } b  \\`<br>&nbsp;&nbsp;&nbsp;`c &\text{if } d`<br>`\end{cases}`|
|\cases|<span style="color:firebrick;">Not supported</span>|see `{cases}`|
|{CD}|<span style="color:firebrick;">Not supported</span>||
|\cdot|$\cdot$||
|\cdotp|$\cdotp$||
|\cdots|$\cdots$||
|\ce |${\mathrm{C}{\vphantom{X}}_{\smash[t]{6}}\mathrm{H}{\vphantom{X}}_{\smash[t]{5}}{-}\mathrm{CHO}}$ <br> $\ce{C6H5-CHO}$ | `{\mathrm{C}{\vphantom{X}}_{\smash[t]{6}}\mathrm{H}{\vphantom{X}}_{\smash[t]{5}}{-}\mathrm{CHO}}` <br> or `\ce{C6H5-CHO}` Requires an [extension](https://github.com/KaTeX/KaTeX/tree/master/contrib/mhchem/)|
|\cee|<span style="color:firebrick;">Not supported</span>|Deprecated by mhchem
|\centerdot|$a\centerdot b$|`a\centerdot b`|
|\cf|<span style="color:firebrick;">Not supported</span>|Deprecated by mhchem;
use `\ce` instead|
|\cfrac|$\cfrac{2}{1+\cfrac{2}{1+\cfrac{2}{1}}}$|`\cfrac{2}{1+\cfrac{2}{1+\cfrac{2}{1}}}`|
|\check|$\check{oe}$|`\check{oe}`|
|\ch|$\ch$||
|\checkmark|$\checkmark$||
|\Chi|$\Chi$||
|\chi|$\chi$||
|\choose|${n+1 \choose k+2}$|`{n+1 \choose k+2}`|
|\circ|$\circ$||
|\circeq|$\circeq$||
|\circlearrowleft|$\circlearrowleft$||
|\circlearrowright|$\circlearrowright$||
|\circledast|$\circledast$||
|\circledcirc|$\circledcirc$||
|\circleddash|$\circleddash$||
|\circledR|$\circledR$||
|\circledS|$\circledS$||
|\class|<span style="color:firebrick;">Not supported</span>|A PR is pending.
|\cline|<span style="color:firebrick;">Not supported</span>|[Issue #269](https://github.com/KaTeX/KaTeX/issues/269)|
|\clubs|$\clubs$||
|\clubsuit|$\clubsuit$||
|\cnums|$\cnums$||
|\colon|$\colon$||
|\Colonapprox|$\Colonapprox$||
|\colonapprox|$\colonapprox$||
|\Coloneq|$\Coloneq$||
|\coloneq|$\coloneq$||
|\Coloneqq|$\Coloneqq$||
|\coloneqq|$\coloneqq$||
|\Colonsim|$\Colonsim$||
|\colonsim|$\colonsim$||
|\color|$\color{#0000FF} AaBb123$|`\color{#0000FF} AaBb123`|
|\colorbox|$\colorbox{red}{Black on red}$|`\colorbox{red}{Black on red}`|
|\complement|$\complement$||
|\Complex|$\Complex$||
|\cong|$\cong$||
|\Coppa|<span style="color:firebrick;">Not supported</span>||
|\coppa|<span style="color:firebrick;">Not supported</span>||
|\coprod|$\coprod$||
|\copyright|$\copyright$||
|\cos|$\cos$||
|\cosec|$\cosec$||
|\cosh|$\cosh$||
|\cot|$\cot$||
|\cotg|$\cotg$||
|\coth|$\coth$||
|\cr|$\begin{matrix} a & b\cr c & d \end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \cr`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\csc|$\csc$||
|\cssId|<span style="color:firebrick;">Not supported</span>|A PR is pending.
|\ctg|$\ctg$||
|\cth|$\cth$||
|\Cup|$\Cup$||
|\cup|$\cup$||
|\curlyeqprec|$\curlyeqprec$||
|\curlyeqsucc|$\curlyeqsucc$||
|\curlyvee|$\curlyvee$||
|\curlywedge|$\curlywedge$||
|\curvearrowleft|$\curvearrowleft$||
|\curvearrowright|$\curvearrowright$||

## D

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\dag|$\dag$||
|\Dagger|$\Dagger$||
|\dagger|$\dagger$||
|\daleth|$\daleth$||
|\Darr|$\Darr$||
|\dArr|$\dArr$||
|\darr|$\darr$||
{darray}|$\begin{darray}{cc}a&b\\c&d\end{darray}$ | `\begin{darray}{cc}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{darray}`|
|\dashleftarrow|$\dashleftarrow$||
|\dashrightarrow|$\dashrightarrow$||
|\dashv|$\dashv$||
|\dbinom|$\dbinom n k$|`\dbinom n k`|
|\dblcolon|$\dblcolon$||
|{dcases}|$\begin{dcases}a&\text{if }b\\c&\text{if }d\end{dcases}$|`\begin{dcases}`<br>&nbsp;&nbsp;&nbsp;`a &\text{if } b  \\`<br>&nbsp;&nbsp;&nbsp;`c &\text{if } d`<br>`\end{dcases}`|
|\ddag|$\ddag$||
|\ddagger|$\ddagger$||
|\ddddot|<span style="color:firebrick;">Not supported</span>||
|\dddot|<span style="color:firebrick;">Not supported</span>||
|\ddot|$\ddot x$|`\ddot x`|
|\ddots|$\ddots$||
|\DeclareMathOperator|<span style="color:firebrick;">Not supported</span>||
|\def|$\def\foo{x^2} \foo + \foo$|`\def\foo{x^2} \foo + \foo`|
|\definecolor|<span style="color:firebrick;">Not supported</span>|[Issue #750](https://github.com/KaTeX/KaTeX/issues/750)|
|\deg|$\deg$||
|\degree|$\degree$||
|\delta|$\delta$||
|\Delta|$\Delta$||
|\det|$\det$||
|\Digamma|<span style="color:firebrick;">Not supported</span>||
|\digamma|$\digamma$||
|\dfrac|$\dfrac{a-1}{b-1}$|`\dfrac{a-1}{b-1}`|
|\diagdown|$\diagdown$||
|\diagup|$\diagup$||
|\Diamond|$\Diamond$||
|\diamond|$\diamond$||
|\diamonds|$\diamonds$||
|\diamondsuit|$\diamondsuit$||
|\dim|$\dim$||
|\displaylines|<span style="color:firebrick;">Not supported</span>||
|\displaystyle|$\displaystyle\sum_0^n$|`\displaystyle\sum_0^n`|
|\div|$\div$||
|\divideontimes|$\divideontimes$||
|\dot|$\dot x$|`\dot x`|
|\Doteq|$\Doteq$||
|\doteq|$\doteq$||
|\doteqdot|$\doteqdot$||
|\dotplus|$\dotplus$||
|\dots|$x_1 + \dots + x_n$|`x_1 + \dots + x_n`|
|\dotsb|$x_1 +\dotsb + x_n$|`x_1 +\dotsb + x_n`|
|\dotsc|$x,\dotsc,y$|`x,\dotsc,y`|
|\dotsi|$$\int_{A_1}\int_{A_2}\dotsi$$|`\int_{A_1}\int_{A_2}\dotsi`|
|\dotsm|$x_1 x_2 \dotsm x_n$|`$x_1 x_2 \dotsm x_n`|
|\dotso|$\dotso$||
|\doublebarwedge|$\doublebarwedge$||
|\doublecap|$\doublecap$||
|\doublecup|$\doublecup$||
|\Downarrow|$\Downarrow$||
|\downarrow|$\downarrow$||
|\downdownarrows|$\downdownarrows$||
|\downharpoonleft|$\downharpoonleft$||
|\downharpoonright|$\downharpoonright$||
|{drcases}|$\begin{drcases}a&\text{if }b\\c&\text{if }d\end{drcases}$|`\begin{drcases}`<br>&nbsp;&nbsp;&nbsp;`a &\text{if } b  \\`<br>&nbsp;&nbsp;&nbsp;`c &\text{if } d`<br>`\end{drcases}`|

## E

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\edef|$\def\foo{a}\edef\bar{\foo}\def\foo{}\bar$|`\def\foo{a}\edef\bar{\foo}\def\foo{}\bar`|
|\ell|$\ell$||
|\else|<span style="color:firebrick;">Not supported</span>|[Issue #1003](https://github.com/KaTeX/KaTeX/issues/1003)|
|\em|<span style="color:firebrick;">Not supported</span>||
|\emph|<span style="color:firebrick;">Not supported</span>||
|\empty|$\empty$||
|\emptyset|$\emptyset$||
|\enclose|<span style="color:firebrick;">Not supported</span>|Non standard
|\end|$\begin{matrix} a & b\\ c & d\end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\endgroup|${a\endgroup$|`{a\endgroup`|
|\enspace|$a\enspace b$|`a\enspace b`|
|\Epsilon|$\Epsilon$||
|\epsilon|$\epsilon$||
|\eqalign|<span style="color:firebrick;">Not supported</span>||
|\eqalignno|<span style="color:firebrick;">Not supported</span>||
|\eqcirc|$\eqcirc$||
|\Eqcolon|$\Eqcolon$||
|\eqcolon|$\eqcolon$||
|{equation}|<span style="color:firebrick;">Not supported</span>|[Issue #445](https://github.com/KaTeX/KaTeX/issues/445)|
|{eqnarray}|<span style="color:firebrick;">Not supported</span>||
|\Eqqcolon|$\Eqqcolon$||
|\eqqcolon|$\eqqcolon$||
|\eqref|<span style="color:firebrick;">Not supported</span>|[Issue #350](https://github.com/KaTeX/KaTeX/issues/350)|
|\eqsim|$\eqsim$||
|\eqslantgtr|$\eqslantgtr$||
|\eqslantless|$\eqslantless$||
|\equiv|$\equiv$||
|\Eta|$\Eta$||
|\eta|$\eta$||
|\eth|$\eth$||
|\euro|<span style="color:firebrick;">Not supported</span>||
|\exist|$\exist$||
|\exists|$\exists$||
|\exp|$\exp$||
|\expandafter|||

## F

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\fallingdotseq|$\fallingdotseq$||
|\fbox|$\fbox{Hi there!}$|`\fbox{Hi there!}`|
|\fcolorbox|$\fcolorbox{red}{aqua}{A}$|`\fcolorbox{red}{aqua}{A}`|
|\fi|<span style="color:firebrick;">Not supported</span>|[Issue #1003](https://github.com/KaTeX/KaTeX/issues/1003)|
|\Finv|$\Finv$||
|\flat|$\flat$||
|\footnotesize|$\footnotesize footnotesize$|`\footnotesize footnotesize`|
|\forall|$\forall$||
|\frac|$\frac a b$|`\frac a b`|
|\frak|$\frak{AaBb}$|`\frak{AaBb}`|
|\frown|$\frown$||
|\futurelet|||

## G

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\Game|$\Game$||
|\Gamma|$\Gamma$||
|\gamma|$\gamma$||
|{gather}|<span style="color:firebrick;">Not supported</span>|see `{gathered}`|
|{gathered}|$\begin{gathered}a=b\\e=b+c\end{gathered}$|`\begin{gathered}`<br>&nbsp;&nbsp;&nbsp;`a=b \\ `<br>&nbsp;&nbsp;&nbsp;`e=b+c`<br>`\end{gathered}`|
|\gcd|$\gcd$||
|\gdef|$\gdef\bar#1{#1^2} \bar{y} + \bar{y}$|`\gdef\bar#1{#1^2} \bar{y} + \bar{y}`|
|\ge|$\ge$||
|\geneuro|<span style="color:firebrick;">Not supported</span>||
|\geneuronarrow|<span style="color:firebrick;">Not supported</span>||
|\geneurowide|<span style="color:firebrick;">Not supported</span>||
|\genfrac|$\genfrac ( ] {2pt}{0}a{a+1}$|`\genfrac ( ] {2pt}{0}a{a+1}`|
|\geq|$\geq$||
|\geqq|$\geqq$||
|\geqslant|$\geqslant$||
|\gets|$\gets$||
|\gg|$\gg$||
|\ggg|$\ggg$||
|\gggtr|$\gggtr$||
|\gimel|$\gimel$||
|\global|$\global\def\add#1#2{#1+#2} \add 2 3$|`\global\def\add#1#2{#1+#2} \add 2 3`|
|\gnapprox|$\gnapprox$||
|\gneq|$\gneq$||
|\gneqq|$\gneqq$||
|\gnsim|$\gnsim$||
|\grave|$\grave{eu}$|`\grave{eu}`|
|\gt|$a \gt b$|`a \gt b`|
|\gtrdot|$\gtrdot$||
|\gtrapprox|$\gtrapprox$||
|\gtreqless|$\gtreqless$||
|\gtreqqless|$\gtreqqless$||
|\gtrless|$\gtrless$||
|\gtrsim|$\gtrsim$||
|\gvertneqq|$\gvertneqq$||

## H

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\H|$\text{\H{a}}$|`\text{\H{a}}`|
|\Harr|$\Harr$||
|\hArr|$\hArr$||
|\harr|$\harr$||
|\hat|$\hat{\theta}$|`\hat{\theta}`|
|\hbar|$\hbar$||
|\hbox|<span style="color:firebrick;">Not supported</span>||
|\hdashline|$\begin{matrix}a&b\\ \hdashline c &d\end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`\hdashline`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\hearts|$\hearts$||
|\heartsuit|$\heartsuit$||
|\hfil|<span style="color:firebrick;">Not supported</span>||
|\hfill|<span style="color:firebrick;">Not supported</span>|Issues [#164](https://github.com/KaTeX/KaTeX/issues/164) & [#269](https://github.com/KaTeX/KaTeX/issues/269)|
|\hline|$\begin{matrix}a&b\\ \hline c &d\end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\ \hline`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\hom|$\hom$||
|\hookleftarrow|$\hookleftarrow$||
|\hookrightarrow|$\hookrightarrow$||
|\hphantom|$a\hphantom{bc}d$|`a\hphantom{bc}d`|
|\href|$\href{https://katex.org/}{\KaTeX}$|`\href{https://katex.org/}{\KaTeX}` Requires `trust` [option](options.md)|
|\hskip|$w\hskip1em i\hskip2em d$|`w\hskip1em i\hskip2em d`|
|\hslash|$\hslash$||
|\hspace|$s\hspace7ex k$|`s\hspace7ex k`|
|\htmlClass|$\htmlClass{foo}{x}$|`\htmlClass{foo}{x}` Must enable `trust` and disable `strict` [option](options.md)|
|\htmlData|$\htmlData{foo=a, bar=b}{x}$|`\htmlData{foo=a, bar=b}{x}` Must enable `trust` and disable `strict` [option](options.md)|
|\htmlId|$\htmlId{bar}{x}$|`\htmlId{bar}{x}` Must enable `trust` and disable `strict` [option](options.md)|
|\htmlStyle|$\htmlStyle{color: red;}{x}$|`\htmlStyle{color: red;}{x}` Must enable `trust` and disable `strict` [option](options.md)|
|\huge|$\huge huge$|`\huge huge`|
|\Huge|$\Huge Huge$|`\Huge Huge`|

## I

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\i|$\text{\i}$|`\text{\i}`|
|\idotsint|<span style="color:firebrick;">Not supported</span>||
|\iddots|<span style="color:firebrick;">Not supported</span>|[Issue #1223](https://github.com/KaTeX/KaTeX/issues/1223)|
|\if|<span style="color:firebrick;">Not supported</span>|[Issue #1003](https://github.com/KaTeX/KaTeX/issues/1003)|
|\iff|$A\iff B$|`A\iff B`|
|\ifmode|<span style="color:firebrick;">Not supported</span>|[Issue #1003](https://github.com/KaTeX/KaTeX/issues/1003)|
|\ifx|<span style="color:firebrick;">Not supported</span>|[Issue #1003](https://github.com/KaTeX/KaTeX/issues/1003)|
|\iiiint|<span style="color:firebrick;">Not supported</span>||
|\iiint|$\iiint$||
|\iint|$\iint$||
|\Im|$\Im$||
|\image|$\image$||
|\imath|$\imath$||
|\impliedby|$P\impliedby Q$|`P\impliedby Q`|
|\implies|$P\implies Q$|`P\implies Q`|
|\in|$\in$||
|\includegraphics|$\includegraphics[height=0.8em, totalheight=0.9em, width=0.9em, alt=KA logo]{https://cdn.kastatic.org/images/apple-touch-icon-57x57-precomposed.new.png}$|`\includegraphics[height=0.8em, totalheight=0.9em, width=0.9em, alt=KA logo]{https://cdn.kastatic.org/images/apple-touch-icon-57x57-precomposed.new.png}` Requires `trust` [option](options.md)
|\inf|$\inf$||
|\infin|$\infin$||
|\infty|$\infty$||
|\injlim|<span style="color:firebrick;">Not supported</span>||
|\int|$\int$||
|\intercal|$\intercal$||
|\intop|$\intop$||
|\Iota|$\Iota$||
|\iota|$\iota$||
|\isin|$\isin$||
|\it|${\it AaBb}$|`{\it AaBb}`|
|\itshape|<span style="color:firebrick;">Not supported</span>||

## JK

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\j|$\text{\j}$|`\text{\j}`|
|\jmath|$\jmath$||
|\Join|$\Join$||
|\Kappa|$\Kappa$||
|\kappa|$\kappa$||
|\KaTeX|$\KaTeX$||
|\ker|$\ker$||
|\kern|$I\kern-2.5pt R$|`I\kern-2.5pt R`|
|\Ket|$\left\|\psi\right\rangle$|`\Ket{\psi}`|
|\ket|$\mathinner{\|{\psi}\rangle}$|`\ket{\psi}`|
|\Koppa|<span style="color:firebrick;">Not supported</span>||
|\koppa|<span style="color:firebrick;">Not supported</span>||

## L

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\L|<span style="color:firebrick;">Not supported</span>||
|\l|<span style="color:firebrick;">Not supported</span>||
|\Lambda|$\Lambda$||
|\lambda|$\lambda$||
|\label|<span style="color:firebrick;">Not supported</span>||
|\land|$\land$||
|\lang|$\lang A\rangle$|`\lang A\rangle`|
|\langle|$\langle A\rangle$|`\langle A\rangle`|
|\Larr|$\Larr$||
|\lArr|$\lArr$||
|\larr|$\larr$||
|\large|$\large large$|`\large large`|
|\Large|$\Large Large$|`\Large Large`|
|\LARGE|$\LARGE LARGE$|`\LARGE LARGE`|
|\LaTeX|$\LaTeX$||
|\lBrace|$\lBrace$||
|\lbrace|$\lbrace$||
|\lbrack|$\lbrack$||
|\lceil|$\lceil$||
|\ldotp|$\ldotp$||
|\ldots|$\ldots$||
|\le|$\le$||
|\leadsto|$\leadsto$||
|\left|$\left\lbrace \dfrac ab \right.$|`\left\lbrace \dfrac ab \right.`|
|\leftarrow|$\leftarrow$||
|\Leftarrow|$\Leftarrow$||
|\LeftArrow|<span style="color:firebrick;">Not supported</span>|Non standard
|\leftarrowtail|<span style="color:firebrick;">Not supported</span>||
|\leftharpoondown|$\leftharpoondown$||
|\leftharpoonup|$\leftharpoonup$||
|\leftleftarrows|$\leftleftarrows$||
|\Leftrightarrow|$\Leftrightarrow$||
|\leftrightarrow|$\leftrightarrow$||
|\leftrightarrows|$\leftrightarrows$||
|\leftrightharpoons|$\leftrightharpoons$||
|\leftrightsquigarrow|$\leftrightsquigarrow$||
|\leftroot|<span style="color:firebrick;">Not supported</span>||
|\leftthreetimes|$\leftthreetimes$||
|\leq|$\leq$||
|\leqalignno|<span style="color:firebrick;">Not supported</span>||
|\leqq|$\leqq$||
|\leqslant|$\leqslant$||
|\lessapprox|$\lessapprox$||
|\lessdot|$\lessdot$||
|\lesseqgtr|$\lesseqgtr$||
|\lesseqqgtr|$\lesseqqgtr$||
|\lessgtr|$\lessgtr$||
|\lesssim|$\lesssim$||
|\let|||
|\lfloor|$\lfloor$||
|\lg|$\lg$||
|\lgroup|$\lgroup$||
|\lhd|$\lhd$||
|\lim|$\lim$||
|\liminf|$\liminf$||
|\limits|$\lim\limits_x$|`\lim\limits_x`|
|\limsup|$\limsup$||
|\ll|$\ll$||
|\llap|${=}\llap{/\,}$|`{=}\llap{/\,}`|
|\llbracket|$\llbracket$||
|\llcorner|$\llcorner$||
|\Lleftarrow|$\Lleftarrow$||
|\lll|$\lll$||
|\llless|$\llless$||
|\lmoustache|$\lmoustache$||
|\ln|$\ln$||
|\lnapprox|$\lnapprox$||
|\lneq|$\lneq$||
|\lneqq|$\lneqq$||
|\lnot|$\lnot$||
|\lnsim|$\lnsim$||
|\log|$\log$||
|\long|||
|\Longleftarrow|$\Longleftarrow$||
|\longleftarrow|$\longleftarrow$||
|\Longleftrightarrow|$\Longleftrightarrow$||
|\longleftrightarrow|$\longleftrightarrow$||
|\longmapsto|$\longmapsto$||
|\Longrightarrow|$\Longrightarrow$||
|\longrightarrow|$\longrightarrow$||
|\looparrowleft|$\looparrowleft$||
|\looparrowright|$\looparrowright$||
|\lor|$\lor$||
|\lower|<span style="color:firebrick;">Not supported</span>||
|\lozenge|$\lozenge$||
|\lparen|$\lparen$||
|\Lrarr|$\Lrarr$||
|\lrArr|$\lrArr$||
|\lrarr|$\lrarr$||
|\lrcorner|$\lrcorner$||
|\lq|$\lq$||
|\Lsh|$\Lsh$||
|\lt|$\lt$||
|\ltimes|$\ltimes$||
|\lVert|$\lVert$||
|\lvert|$\lvert$||
|\lvertneqq|$\lvertneqq$||

## M

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\maltese|$\maltese$||
|\mapsto|$\mapsto$||
|\mathbb|$\mathbb{AB}$|`\mathbb{AB}`<br>KaTeX supports A-Z k|
|\mathbf|$\mathbf{AaBb123}$|`\mathbf{AaBb123}`|
|\mathbin|$a\mathbin{!}b$|`a\mathbin{!}b`|
|\mathcal|$\mathcal{AaBb123}$|`\mathcal{AaBb123}`|
|\mathchoice|$a\mathchoice{\,}{\,\,}{\,\,\,}{\,\,\,\,}b$|`a\mathchoice{\,}{\,\,}{\,\,\,}{\,\,\,\,}b`|
|\mathclap|$\displaystyle\sum_{\mathclap{1\le i\le n}} x_{i}$|`\sum_{\mathclap{1\le i\le n}} x_{i}`|
|\mathclose|$a + (b\mathclose\gt + c$|`a + (b\mathclose\gt + c`|
|\mathellipsis|$\mathellipsis$||
|\mathfrak|$\mathfrak{AaBb}$|`\mathfrak{AaBb}`<br>KaTeX supports A-Za-z|
|\mathinner|$ab\mathinner{\text{inside}}cd$|`ab\mathinner{\text{inside}}cd`|
|\mathit|$\mathit{AaBb}$|`\mathit{AaBb}`<br>KaTeX supports A-Za-z|
|\mathllap|${=}\mathllap{/\,}$|`{=}\mathllap{/\,}`|
|\mathnormal|$\mathnormal{AaBb}$|`\mathnormal{AaBb}`<br>KaTeX supports A-Za-z|
|\mathop|$\mathop{\star}_a^b$|`\mathop{\star}_a^b`|
|\mathopen|$a + \mathopen\lt b) + c$|`a + \mathopen\lt b) + c`|
|\mathord|$1\mathord{,}234{,}567$|`1\mathord{,}234{,}567`|
|\mathpunct|$A\mathpunct{-}B$|`A\mathpunct{-}B`|
|\mathrel|$a \mathrel{\#} b$|`a \mathrel{\#} b`|
|\mathrlap|$\mathrlap{\,/}{=}$|`\mathrlap{\,/}{=}`|
|\mathring|$\mathring{a}$|`\mathring{a}`|
|\mathrm|$\mathrm{AaBb123}$|`\mathrm{AaBb123}`|
|\mathscr|$\mathscr{AB}$|`\mathscr{AaBb123}`<br>KaTeX supports A-Z|
|\mathsf|$\mathsf{AaBb123}$|`\mathsf{AaBb123}`|
|\mathsterling|$\mathsterling$||
|\mathstrut|<span style="color:firebrick;">Not supported</span>||
|\mathtip|<span style="color:firebrick;">Not supported</span>||
|\mathtt|$\mathtt{AaBb123}$|`\mathtt{AaBb123}`|
|\matrix|<span style="color:firebrick;">Not supported</span>|See `{matrix}`|
|{matrix}|$\begin{matrix}a&b\\c&d\end{matrix}$|`\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}`|
|\max|$\max$||
|\mbox|<span style="color:firebrick;">Not supported</span>||
|\md|<span style="color:firebrick;">Not supported</span>||
|\mdseries|<span style="color:firebrick;">Not supported</span>||
|\measuredangle|$\measuredangle$||
|\medspace|$a\medspace b$|`a\medspace b`|
|\mho|$\mho$||
|\mid|$\{x∈ℝ\mid x>0\}$|`\{x∈ℝ\mid x>0\}`|
|\middle|$P\left(A\middle\vert B\right)$|`P\left(A\middle\vert B\right)`|
|\min|$\min$||
|\mit|<span style="color:firebrick;">Not supported</span>|See `\mathit`|
|\mkern|$a\mkern18mu b$|`a\mkern18mu b`|
|\mmlToken|<span style="color:firebrick;">Not supported</span>||
|\mod|$3\equiv 5 \mod 2$|`3\equiv 5 \mod 2`|
|\models|$\models$||
|\moveleft|<span style="color:firebrick;">Not supported</span>||
|\moveright|<span style="color:firebrick;">Not supported</span>||
|\mp|$\mp$||
|\mskip|$a\mskip{10mu}b$|`a\mskip{10mu}b`|
|\mspace|<span style="color:firebrick;">Not supported</span>||
|\Mu|$\Mu$||
|\mu|$\mu$||
|\multicolumn|<span style="color:firebrick;">Not supported</span>|[Issue #269](https://github.com/KaTeX/KaTeX/issues/269)|
|{multiline}|<span style="color:firebrick;">Not supported</span>||
|\multimap|$\multimap$||

## N

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\N|$\N$||
|\nabla|$\nabla$||
|\natnums|$\natnums$||
|\natural|$\natural$||
|\negmedspace|$a\negmedspace b$|`a\negmedspace b`|
|\ncong|$\ncong$||
|\ne|$\ne$||
|\nearrow|$\nearrow$||
|\neg|$\neg$||
|\negthickspace|$a\negthickspace b$|`a\negthickspace b`|
|\negthinspace|$a\negthinspace b$|`a\negthinspace b`|
|\neq|$\neq$||
|\newcommand|$\newcommand\chk{\checkmark} \chk$|`\newcommand\chk{\checkmark} \chk`|
|\newenvironment|<span style="color:firebrick;">Not supported</span>|[Issue #37](https://github.com/KaTeX/KaTeX/issues/37)|
|\Newextarrow|<span style="color:firebrick;">Not supported</span>||
|\newline|$a\newline b$|`a\newline b`|
|\nexists|$\nexists$||
|\ngeq|$\ngeq$||
|\ngeqq|$\ngeqq$||
|\ngeqslant|$\ngeqslant$||
|\ngtr|$\ngtr$||
|\ni|$\ni$||
|\nleftarrow|$\nleftarrow$||
|\nLeftarrow|$\nLeftarrow$||
|\nLeftrightarrow|$\nLeftrightarrow$||
|\nleftrightarrow|$\nleftrightarrow$||
|\nleq|$\nleq$||
|\nleqq|$\nleqq$||
|\nleqslant|$\nleqslant$||
|\nless|$\nless$||
|\nmid|$\nmid$||
|\nobreak|||
|\nobreakspace|$a\nobreakspace b$|`a\nobreakspace b`|
|\noexpand|||
|\nolimits|$\lim\nolimits_x$|`\lim\nolimits_x`|
|\normalfont|<span style="color:firebrick;">Not supported</span>||
|\normalsize|$\normalsize normalsize$|`\normalsize normalsize`|
|\not|$\not =$|`\not =`|
|\notag|<span style="color:firebrick;">Not supported</span>||
|\notin|$\notin$||
|\notni|$\notni$||
|\nparallel|$\nparallel$||
|\nprec|$\nprec$||
|\npreceq|$\npreceq$||
|\nRightarrow|$\nRightarrow$||
|\nrightarrow|$\nrightarrow$||
|\nshortmid|$\nshortmid$||
|\nshortparallel|$\nshortparallel$||
|\nsim|$\nsim$||
|\nsubseteq|$\nsubseteq$||
|\nsubseteqq|$\nsubseteqq$||
|\nsucc|$\nsucc$||
|\nsucceq|$\nsucceq$||
|\nsupseteq|$\nsupseteq$||
|\nsupseteqq|$\nsupseteqq$||
|\ntriangleleft|$\ntriangleleft$||
|\ntrianglelefteq|$\ntrianglelefteq$||
|\ntriangleright|$\ntriangleright$||
|\ntrianglerighteq|$\ntrianglerighteq$||
|\Nu|$\Nu$||
|\nu|$\nu$||
|\nVDash|$\nVDash$||
|\nVdash|$\nVdash$||
|\nvDash|$\nvDash$||
|\nvdash|$\nvdash$||
|\nwarrow|$\nwarrow$||

## O

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\O|$\text{\O}$|`\text{\O}`|
|\o|$\text{\o}$|`\text{\o}`|
|\odot|$\odot$||
|\OE|$\text{\OE}$|`\text{\OE}`|
|\oe|$\text{\oe}$|`\text{\oe}`|
|\officialeuro|<span style="color:firebrick;">Not supported</span>||
|\oiiint|$\oiiint$||
|\oiint|$\oiint$||
|\oint|$\oint$||
|\oldstyle|<span style="color:firebrick;">Not supported</span>||
|\omega|$\omega$||
|\Omega|$\Omega$||
|\Omicron|$\Omicron$||
|\omicron|$\omicron$||
|\ominus|$\ominus$||
|\operatorname|$\operatorname{asin} x$|\operatorname{asin} x|
|\operatorname\*|$\operatorname{asin}\limits_y x$|`\operatorname{asin}\limits_y x`|
|\oplus|$\oplus$||
|\or|<span style="color:firebrick;">Not supported</span>||
|\oslash|$\oslash$||
|\otimes|$\otimes$||
|\over|${a+1 \over b+2}+c$|`{a+1 \over b+2}+c`|
|\overbrace|$\overbrace{x+⋯+x}^{n\text{ times}}$|`\overbrace{x+⋯+x}^{n\text{ times}}`|
|\overbracket|<span style="color:firebrick;">Not supported</span>||
|\overgroup|$\overgroup{AB}$|`\overgroup{AB}`|
|\overleftarrow|$\overleftarrow{AB}$|`\overleftarrow{AB}`|
|\overleftharpoon|$\overleftharpoon{AB}$|`\overleftharpoon{AB}`|
|\overleftrightarrow|$\overleftrightarrow{AB}$|`\overleftrightarrow{AB}`|
|\overline|$\overline{\text{a long argument}}$|`\overline{\text{a long argument}}`|
|\overlinesegment|$\overlinesegment{AB}$|`\overlinesegment{AB}`|
|\overparen|<span style="color:firebrick;">Not supported</span>|See `\overgroup`|
|\Overrightarrow|$\Overrightarrow{AB}$|`\Overrightarrow{AB}`|
|\overrightarrow|$\overrightarrow{AB}$|`\overrightarrow{AB}`|
|\overrightharpoon|$\overrightharpoon{ac}$|`\overrightharpoon{ac}`|
|\overset|$\overset{!}{=}$|`\overset{!}{=}`|
|\overwithdelims|<span style="color:firebrick;">Not supported</span>||
|\owns|$\owns$||

## P

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\P|$\text{\P}$|`\text{\P}`|
|\pagecolor|<span style="color:firebrick;">Not supported</span>|[Deprecated](https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax)|
|\parallel|$\parallel$||
|\part|<span style="color:firebrick;">Not supported</span>|[Deprecated](https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax)|
|\partial|$\partial$||
|\perp|$\perp$||
|\phantom|$\Gamma^{\phantom{i}j}_{i\phantom{j}k}$|`\Gamma^{\phantom{i}j}_{i\phantom{j}k}`|
|\phase|<span style="color:firebrick;">Not supported</span>||
|\Phi|$\Phi$||
|\phi|$\phi$||
|\Pi|$\Pi$||
|\pi|$\pi$||
|{picture}|<span style="color:firebrick;">Not supported</span>||
|\pitchfork|$\pitchfork$||
|\plim|$\plim$||
|\plusmn|$\plusmn$||
|\pm|$\pm$||
|\pmatrix|<span style="color:firebrick;">Not supported</span>|See `{pmatrix}`|
|{pmatrix}|$\begin{pmatrix}a&b\\c&d\end{pmatrix}$|`\begin{pmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{pmatrix}`
|\pmb|$\pmb{\mu}$|`\pmb{\mu}`|
|\pmod|$x\pmod a$|`x\pmod a`|
|\pod|$x \pod a$|`x \pod a`|
|\pounds|$\pounds$||
|\Pr|$\Pr$||
|\prec|$\prec$||
|\precapprox|$\precapprox$||
|\preccurlyeq|$\preccurlyeq$||
|\preceq|$\preceq$||
|\precnapprox|$\precnapprox$||
|\precneqq|$\precneqq$||
|\precnsim|$\precnsim$||
|\precsim|$\precsim$||
|\prime|$\prime$||
|\prod|$\prod$||
|\projlim|<span style="color:firebrick;">Not supported</span>||
|\propto|$\propto$||
|\providecommand|$\providecommand\greet{\text{Hello}} \greet$|`\providecommand\greet{\text{Hello}} \greet`|
|\psi|$\psi$||
|\Psi|$\Psi$||
|\pu |${123~\mathchoice{\textstyle\frac{\mathrm{kJ}}{\mathrm{mol}}}{\frac{\mathrm{kJ}}{\mathrm{mol}}}{\frac{\mathrm{kJ}}{\mathrm{mol}}}{\frac{\mathrm{kJ}}{\mathrm{mol}}}}$|`\pu{123 kJ//mol}` Requires an [extension](https://github.com/KaTeX/KaTeX/tree/master/contrib/mhchem/)|

## QR

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\Q|<span style="color:firebrick;">Not supported</span>|See `\Bbb{Q}`|
|\qquad|$a\qquad\qquad{b}$|`a\qquad\qquad{b}`|
|\quad|$a\quad\quad{b}$|`a\quad\quad{b}`|
|\R|$\R$||
|\r|$\text{\r{a}}$|`\text{\r{a}}`|
|\raise|<span style="color:firebrick;">Not supported</span>|see `\raisebox`|
|\raisebox|$h\raisebox{2pt}{ighe}r$|`h\raisebox{2pt}{ighe}r`|
|\rang|$\langle A\rang$|`\langle A\rang`|
|\rangle|$\langle A\rangle$|`\langle A\rangle`|
|\Rarr|$\Rarr$||
|\rArr|$\rArr$||
|\rarr|$\rarr$||
|\rBrace|$\rBrace$||
|\rbrace|$\rbrace$||
|\rbrack|$\rbrack$||
|{rcases}|$\begin{rcases}a&\text{if }b\\c&\text{if }d\end{rcases}$|`\begin{rcases}`<br>&nbsp;&nbsp;&nbsp;`a &\text{if } b  \\`<br>&nbsp;&nbsp;&nbsp;`c &\text{if } d`<br>`\end{rcases}`|
|\rceil|$\rceil$||
|\Re|$\Re$||
|\real|$\real$||
|\Reals|$\Reals$||
|\reals|$\reals$||
|\ref|<span style="color:firebrick;">Not supported</span>|[Issue #350](https://github.com/KaTeX/KaTeX/issues/350)|
|\relax|||
|\renewcommand|$\def\hail{Hi!}\renewcommand\hail{\text{Ahoy!}} \hail$|`\def\hail{Hi!}`<br>`\renewcommand\hail{\text{Ahoy!}}`<br>`\hail`|
|\renewenvironment|<span style="color:firebrick;">Not supported</span>||
|\require|<span style="color:firebrick;">Not supported</span>||
|\restriction|$\restriction$||
|\rfloor|$\rfloor$||
|\rgroup|$\rgroup$||
|\rhd|$\rhd$||
|\Rho|$\Rho$||
|\rho|$\rho$||
|\right|$\left.\dfrac a b\right)$|`\left.\dfrac a b\right)`|
|\Rightarrow|$\Rightarrow$||
|\rightarrow|$\rightarrow$||
|\rightarrowtail|$\rightarrowtail$||
|\rightharpoondown|$\rightharpoondown$||
|\rightharpoonup|$\rightharpoonup$||
|\rightleftarrows|$\rightleftarrows$||
|\rightleftharpoons|$\rightleftharpoons$||
|\rightrightarrows|$\rightrightarrows$||
|\rightsquigarrow|$\rightsquigarrow$||
|\rightthreetimes|$\rightthreetimes$||
|\risingdotseq|$\risingdotseq$||
|\rlap|$\rlap{\,/}{=}$|`\rlap{\,/}{=}`|
|\rm|$\rm AaBb12$|`\rm AaBb12`|
|\rmoustache|$\rmoustache$||
|\root|<span style="color:firebrick;">Not supported</span>||
|\rotatebox|<span style="color:firebrick;">Not supported</span>|[Issue #681](https://github.com/KaTeX/KaTeX/issues/681)|
|\rparen|$\rparen$||
|\rq|$\rq$||
|\rrbracket|$\rrbracket$||
|\Rrightarrow|$\Rrightarrow$||
|\Rsh|$\Rsh$||
|\rtimes|$\rtimes$||
|\Rule|<span style="color:firebrick;">Not supported</span>|see `\rule`
|\rule|$x\rule[6pt]{2ex}{1ex}x$|`x\rule[6pt]{2ex}{1ex}x`|
|\rVert|$\rVert$||
|\rvert|$\rvert$||

## S

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\S|$\text{\S}$|`\text{\S}`|
|\Sampi|<span style="color:firebrick;">Not supported</span>||
|\sampi|<span style="color:firebrick;">Not supported</span>||
|\sc|<span style="color:firebrick;">Not supported</span>|[Issue #471](https://github.com/KaTeX/KaTeX/issues/471)|
|\scalebox|<span style="color:firebrick;">Not supported</span>||
|\scr|<span style="color:firebrick;">Not supported</span>|See `\mathscr`|
|\scriptscriptstyle|$\scriptscriptstyle \frac cd$|`\scriptscriptstyle \frac cd`|
|\scriptsize|$\scriptsize scriptsize$|`\scriptsize scriptsize`|
|\scriptstyle|$\frac ab + {\scriptstyle \frac cd}$|`\frac ab + {\scriptstyle \frac cd}`|
|\sdot|$\sdot$||
|\searrow|$\searrow$||
|\sec|$\sec$||
|\sect|$\text{\sect}$|`\text{\sect}`|
|\setlength|<span style="color:firebrick;">Not supported</span>|[Issue #687](https://github.com/KaTeX/KaTeX/issues/687)|
|\setminus|$\setminus$||
|\sf|$\sf AaBb123$|`\sf AaBb123`|
|\sharp|$\sharp$||
|\shortmid|$\shortmid$||
|\shortparallel|$\shortparallel$||
|\shoveleft|<span style="color:firebrick;">Not supported</span>||
|\shoveright|<span style="color:firebrick;">Not supported</span>||
|\sideset|<span style="color:firebrick;">Not supported</span>||
|\Sigma|$\Sigma$||
|\sigma|$\sigma$||
|\sim|$\sim$||
|\simeq|$\simeq$||
|\sin|$\sin$||
|\sinh|$\sinh$||
|\sixptsize|$\sixptsize sixptsize$|`\sixptsize sixptsize`|
|\sh|$\sh$||
|\skew|<span style="color:firebrick;">Not supported</span>||
|\skip|<span style="color:firebrick;">Not supported</span>||
|\sl|<span style="color:firebrick;">Not supported</span>||
|\small|$\small small$|`\small small`|
|\smallfrown|$\smallfrown$||
|\smallint|$\smallint$||
|{smallmatrix}|$\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}$|`\begin{smallmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{smallmatrix}`|
|\smallsetminus|$\smallsetminus$||
|\smallsmile|$\smallsmile$||
|\smash|$\left(x^{\smash{2}}\right)$|`\left(x^{\smash{2}}\right)`|
|\smile|$\smile$||
|\smiley|<span style="color:firebrick;">Not supported</span>||
|\sout|$\sout{abc}$|`\sout{abc}`|
|\Space|<span style="color:firebrick;">Not supported</span>|see `\space`
|\space|$a\space b$|`a\space b`|
|\spades|$\spades$||
|\spadesuit|$\spadesuit$||
|\sphericalangle|$\sphericalangle$||
|{split}|<span style="color:firebrick;">Not supported</span>|[Issue #1345](https://github.com/KaTeX/KaTeX/issues/1345)|
|\sqcap|$\sqcap$||
|\sqcup|$\sqcup$||
|\square|$\square$||
|\sqrt|$\sqrt[3]{x}$|`\sqrt[3]{x}`|
|\sqsubset|$\sqsubset$||
|\sqsubseteq|$\sqsubseteq$||
|\sqsupset|$\sqsupset$||
|\sqsupseteq|$\sqsupseteq$||
|\ss|$\text{\ss}$|`\text{\ss}`|
|\stackrel|$\stackrel{!}{=}$|`\stackrel{!}{=}`|
|\star|$\star$||
|\Stigma|<span style="color:firebrick;">Not supported</span>||
|\stigma|<span style="color:firebrick;">Not supported</span>||
|\strut|<span style="color:firebrick;">Not supported</span>||
|\style|<span style="color:firebrick;">Not supported</span>|Non standard|
|\sub|$\sub$||
|{subarray}|<span style="color:firebrick;">Not supported</span>||
|\sube|$\sube$||
|\Subset|$\Subset$||
|\subset|$\subset$||
|\subseteq|$\subseteq$||
|\subseteqq|$\subseteqq$||
|\subsetneq|$\subsetneq$||
|\subsetneqq|$\subsetneqq$||
|\substack|$$\sum_{\substack{0<i<m\\0<j<n}}$$|`\sum_{\substack{0<i<m\\0<j<n}}`|
|\succ|$\succ$||
|\succapprox|$\succapprox$||
|\succcurlyeq|$\succcurlyeq$||
|\succeq|$\succeq$||
|\succnapprox|$\succnapprox$||
|\succneqq|$\succneqq$||
|\succnsim|$\succnsim$||
|\succsim|$\succsim$||
|\sum|$\sum$||
|\sup|$\sup$||
|\supe|$\supe$||
|\Supset|$\Supset$||
|\supset|$\supset$||
|\supseteq|$\supseteq$||
|\supseteqq|$\supseteqq$||
|\supsetneq|$\supsetneq$||
|\supsetneqq|$\supsetneqq$||
|\surd|$\surd$||
|\swarrow|$\swarrow$||

## T

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\tag|$$\tag{3.1c} a^2+b^2=c^2$$|`\tag{3.1c} a^2+b^2=c^2`|
|\tag*|$$\tag*{3.1c} a^2+b^2=c^2$$|`\tag*{3.1c} a^2+b^2=c^2`|
|\tan|$\tan$||
|\tanh|$\tanh$||
|\Tau|$\Tau$||
|\tau|$\tau$||
|\tbinom|$\tbinom n k$|`\tbinom n k`|
|\TeX|$\TeX$||
|\text|$\text{ yes }\&\text{ no }$|`\text{ yes }\&\text{ no }`|
|\textasciitilde|$\text{\textasciitilde}$|`\text{\textasciitilde}`|
|\textasciicircum|$\text{\textasciicircum}$|`\text{\textasciicircum}`|
|\textbackslash|$\text{\textbackslash}$|`\text{\textbackslash}`|
|\textbar|$\text{\textbar}$|`\text{\textbar}`|
|\textbardbl|$\text{\textbardbl}$|`\text{\textbardbl}`|
|\textbf|$\textbf{AaBb123}$|`\textbf{AaBb123}`|
|\textbraceleft|$\text{\textbraceleft}$|`\text{\textbraceleft}`|
|\textbraceright|$\text{\textbraceright}$|`\text{\textbraceright}`|
|\textcircled|$\text{\textcircled a}$|`\text{\textcircled a}`|
|\textcolor|$\textcolor{blue}{F=ma}$|`\textcolor{blue}{F=ma}`|
|\textdagger|$\text{\textdagger}$|`\text{\textdagger}`|
|\textdaggerdbl|$\text{\textdaggerdbl}$|`\text{\textdaggerdbl}`|
|\textdegree|$\text{\textdegree}$|`\text{\textdegree}`|
|\textdollar|$\text{\textdollar}$|`\text{\textdollar}`|
|\textellipsis|$\text{\textellipsis}$|`\text{\textellipsis}`|
|\textemdash|$\text{\textemdash}$|`\text{\textemdash}`|
|\textendash|$\text{\textendash}$|`\text{\textendash}`|
|\textgreater|$\text{\textgreater}$|`\text{\textgreater}`|
|\textit|$\textit{AaBb}$|`\textit{AaBb}`|
|\textless|$\text{\textless}$|`\text{\textless}`|
|\textmd|$\textmd{AaBb123}$|`\textmd{AaBb123}`|
|\textnormal|$\textnormal{AB}$|`\textnormal{AB}`|
|\textquotedblleft|$\text{\textquotedblleft}$|`\text{\textquotedblleft}`|
|\textquotedblright|$\text{\textquotedblright}$|`\text{\textquotedblright}`|
|\textquoteleft|$\text{\textquoteleft}$|`\text{\textquoteleft}`|
|\textquoteright|$\text{\textquoteright}$|`\text{\textquoteright}`|
|\textregistered|$\text{\textregistered}$|`\text{\textregistered}`|
|\textrm|$\textrm{AaBb123}$|`\textrm{AaBb123}`|
|\textsc|<span style="color:firebrick;">Not supported</span>|[Issue #471](https://github.com/KaTeX/KaTeX/issues/471)|
|\textsf|$\textsf{AaBb123}$|`\textsf{AaBb123}`|
|\textsl|<span style="color:firebrick;">Not supported</span>||
|\textsterling|$\text{\textsterling}$|`\text{\textsterling}`|
|\textstyle|$\textstyle\sum_0^n$|`\textstyle\sum_0^n`|
|\texttip|<span style="color:firebrick;">Not supported</span>||
|\texttt|$\texttt{AaBb123}$|`\texttt{AaBb123}`|
|\textunderscore|$\text{\textunderscore}$|`\text{\textunderscore}`|
|\textup|$\textup{AaBb123}$|`\textup{AaBb123}`|
|\textvisiblespace|<span style="color:firebrick;">Not supported</span>||
|\tfrac|$\tfrac ab$|`\tfrac ab`|
|\tg|$\tg$||
|\th|$\th$||
|\therefore|$\therefore$||
|\Theta|$\Theta$||
|\theta|$\theta$||
|\thetasym|$\thetasym$||
|\thickapprox|$\thickapprox$||
|\thicksim|$\thicksim$||
|\thickspace|$a\thickspace b$|`a\thickspace b`|
|\thinspace|$a\thinspace b$|`a\thinspace b`|
|\tilde|$\tilde M$|`\tilde M`|
|\times|$\times$||
|\Tiny|<span style="color:firebrick;">Not supported</span>|see `\tiny`|
|\tiny|$\tiny tiny$|`\tiny tiny`|
|\to|$\to$||
|\toggle|<span style="color:firebrick;">Not supported</span>||
|\top|$\top$||
|\triangle|$\triangle$||
|\triangledown|$\triangledown$||
|\triangleleft|$\triangleleft$||
|\trianglelefteq|$\trianglelefteq$||
|\triangleq|$\triangleq$||
|\triangleright|$\triangleright$||
|\trianglerighteq|$\trianglerighteq$||
|\tt|${\tt AaBb123}$|`{\tt AaBb123}`|
|\twoheadleftarrow|$\twoheadleftarrow$||
|\twoheadrightarrow|$\twoheadrightarrow$||

## U

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\u|$\text{\u{a}}$|`\text{\u{a}}`|
|\Uarr|$\Uarr$||
|\uArr|$\uArr$||
|\uarr|$\uarr$||
|\ulcorner|$\ulcorner$||
|\underbrace|$\underbrace{x+⋯+x}_{n\text{ times}}$|`\underbrace{x+⋯+x}_{n\text{ times}}`|
|\underbracket|<span style="color:firebrick;">Not supported</span>||
|\undergroup|$\undergroup{AB}$|`\undergroup{AB}`|
|\underleftarrow|$\underleftarrow{AB}$|`\underleftarrow{AB}`|
|\underleftrightarrow|$\underleftrightarrow{AB}$|`\underleftrightarrow{AB}`|
|\underrightarrow|$\underrightarrow{AB}$|`\underrightarrow{AB}`|
|\underline|$\underline{\text{a long argument}}$|`\underline{\text{a long argument}}`|
|\underlinesegment|$\underlinesegment{AB}$|`\underlinesegment{AB}`|
|\underparen|<span style="color:firebrick;">Not supported</span>|See `\undergroup`|
|\underrightarrow|$\underrightarrow{AB}$|`\underrightarrow{AB}`|
|\underset|$\underset{!}{=}$|`\underset{!}{=}`|
|\unicode|<span style="color:firebrick;">Not supported</span>||
|\unlhd|$\unlhd$||
|\unrhd|$\unrhd$||
|\up|<span style="color:firebrick;">Not supported</span>||
|\Uparrow|$\Uparrow$||
|\uparrow|$\uparrow$||
|\Updownarrow|$\Updownarrow$||
|\updownarrow|$\updownarrow$||
|\upharpoonleft|$\upharpoonleft$||
|\upharpoonright|$\upharpoonright$||
|\uplus|$\uplus$||
|\uproot|<span style="color:firebrick;">Not supported</span>||
|\upshape|<span style="color:firebrick;">Not supported</span>||
|\Upsilon|$\Upsilon$||
|\upsilon|$\upsilon$||
|\upuparrows|$\upuparrows$||
|\urcorner|$\urcorner$||
|\url|$\footnotesize\url{https://katex.org/}$|`\url{https://katex.org/}` Requires `trust` [option](options.md)|
|\utilde|$\utilde{AB}$|`\utilde{AB}`|

## V

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\v|$\text{\v{a}}$|`\text{\v{a}}`|
|\varcoppa|<span style="color:firebrick;">Not supported</span>||
|\varDelta|$\varDelta$||
|\varepsilon|$\varepsilon$||
|\varGamma|$\varGamma$||
|\varinjlim|<span style="color:firebrick;">Not supported</span>||
|\varkappa|$\varkappa$||
|\varLambda|$\varLambda$||
|\varliminf|<span style="color:firebrick;">Not supported</span>||
|\varlimsup|<span style="color:firebrick;">Not supported</span>||
|\varnothing|$\varnothing$||
|\varOmega|$\varOmega$||
|\varPhi|$\varPhi$||
|\varphi|$\varphi$||
|\varPi|$\varPi$||
|\varpi|$\varpi$||
|\varprojlim|<span style="color:firebrick;">Not supported</span>||
|\varpropto|$\varpropto$||
|\varPsi|$\varPsi$||
|\varPsi|$\varPsi$||
|\varrho|$\varrho$||
|\varSigma|$\varSigma$||
|\varsigma|$\varsigma$||
|\varstigma|<span style="color:firebrick;">Not supported</span>||
|\varsubsetneq|$\varsubsetneq$||
|\varsubsetneqq|$\varsubsetneqq$||
|\varsupsetneq|$\varsupsetneq$||
|\varsupsetneqq|$\varsupsetneqq$||
|\varTheta|$\varTheta$||
|\vartheta|$\vartheta$||
|\vartriangle|$\vartriangle$||
|\vartriangleleft|$\vartriangleleft$||
|\vartriangleright|$\vartriangleright$||
|\varUpsilon|$\varUpsilon$||
|\varXi|$\varXi$||
|\vcentcolon|$\vcentcolon$||
|\vcenter|<span style="color:firebrick;">Not supported</span>||
|\Vdash|$\Vdash$||
|\vDash|$\vDash$||
|\vdash|$\vdash$||
|\vdots|$\vdots$||
|\vec|$\vec{F}$|`\vec{F}`|
|\vee|$\vee$||
|\veebar|$\veebar$||
|\verb|$\verb!\frac a b!$|`\verb!\frac a b!`|
|\Vert|$\Vert$||
|\vert|$\vert$||
|\vfil|<span style="color:firebrick;">Not supported</span>||
|\vfill|<span style="color:firebrick;">Not supported</span>||
|\vline|<span style="color:firebrick;">Not supported</span>|[Issue #269](https://github.com/KaTeX/KaTeX/issues/269)|
|{Vmatrix}|$\begin{Vmatrix}a&b\\c&d\end{Vmatrix}$|`\begin{Vmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{Vmatrix}`|
|{vmatrix}|$\begin{vmatrix}a&b\\c&d\end{vmatrix}$|`\begin{vmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{vmatrix}`|
|\vphantom|$\overline{\vphantom{M}a}$|`\overline{\vphantom{M}a}`|
|\Vvdash|$\Vvdash$||

## W

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\wedge|$\wedge$||
|\weierp|$\weierp$||
|\widecheck|$\widecheck{AB}$|`\widecheck{AB}`|
|\widehat|$\widehat{AB}$|`\widehat{AB}`|
|\wideparen|<span style="color:firebrick;">Not supported</span>|[Issue #560](https://github.com/KaTeX/KaTeX/issues/560)|
|\widetilde|$\widetilde{AB}$|`\widetilde{AB}`|
|\wp|$\wp$||
|\wr|$\wr$||

## X

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\xcancel|$\xcancel{ABC}$|`\xcancel{ABC}`|
|\xdef|$\def\foo{a}\xdef\bar{\foo}\def\foo{}\bar$|`\def\foo{a}\xdef\bar{\foo}\def\foo{}\bar`|
|\Xi|$\Xi$||
|\xi|$\xi$||
|\xhookleftarrow|$\xhookleftarrow{abc}$|`\xhookleftarrow{abc}`|
|\xhookrightarrow|$\xhookrightarrow{abc}$|`\xhookrightarrow{abc}`|
|\xLeftarrow|$\xLeftarrow{abc}$|`\xLeftarrow{abc}`|
|\xleftarrow|$\xleftarrow{abc}$|`\xleftarrow{abc}`|
|\xleftharpoondown|$\xleftharpoondown{abc}$|`\xleftharpoondown{abc}`|
|\xleftharpoonup|$\xleftharpoonup{abc}$|`\xleftharpoonup{abc}`|
|\xLeftrightarrow|$\xLeftrightarrow{abc}$|`\xLeftrightarrow{abc}`|
|\xleftrightarrow|$\xleftrightarrow{abc}$|`\xleftrightarrow{abc}`|
|\xleftrightharpoons|$\xleftrightharpoons{abc}$|`\xleftrightharpoons{abc}`|
|\xlongequal|$\xlongequal{abc}$|`\xlongequal{abc}`|
|\xmapsto|$\xmapsto{abc}$|`\xmapsto{abc}`|
|\xRightarrow|$\xRightarrow{abc}$|`\xRightarrow{abc}`|
|\xrightarrow|$\xrightarrow{abc}$|`\xrightarrow{abc}`|
|\xrightharpoondown|$\xrightharpoondown{abc}$|`\xrightharpoondown{abc}`|
|\xrightharpoonup|$\xrightharpoonup{abc}$|`\xrightharpoonup{abc}`|
|\xrightleftharpoons|$\xrightleftharpoons{abc}$|`\xrightleftharpoons{abc}`|
|\xtofrom|$\xtofrom{abc}$|`\xtofrom{abc}`|
|\xtwoheadleftarrow|$\xtwoheadleftarrow{abc}$|`\xtwoheadleftarrow{abc}`|
|\xtwoheadrightarrow|$\xtwoheadrightarrow{abc}$|`\xtwoheadrightarrow{abc}`|

## YZ

|Symbol/Function |  Rendered   | Source or Comment|
|:---------------|:------------|:-----------------|
|\yen|$\yen$||
|\Z|$\Z$||
|\Zeta|$\Zeta$||
|\zeta|$\zeta$||


# Supported functions

<!-- copied from https://raw.githubusercontent.com/Khan/KaTeX/master/docs/supported.md -->

See also: https://katex.org/docs/supported.html.

This is a list of TeX functions supported by KaTeX. It is sorted into logical groups.

There is a similar [Support Table](./#/support-table), sorted alphabetically, that lists both supported and un-supported functions.

<div class="katex-hopscotch">

## Accents

||||
|:----------------------------|:----------------------------------------------------|:-----
|$a'$ `a'`  |$\tilde{a}$ `\tilde{a}`|$\mathring{g}$ `\mathring{g}`
|$a''$ `a''`|$\widetilde{ac}$ `\widetilde{ac}`  |$\overgroup{AB}$ `\overgroup{AB}`
|$a^{\prime}$ `a^{\prime}` |$\utilde{AB}$ `\utilde{AB}`  |$\undergroup{AB}$ `\undergroup{AB}`
|$\acute{a}$ `\acute{a}`|$\vec{F}$ `\vec{F}` |$\Overrightarrow{AB}$ `\Overrightarrow{AB}`
|$\bar{y}$ `\bar{y}` |$\overleftarrow{AB}$ `\overleftarrow{AB}`|$\overrightarrow{AB}$ `\overrightarrow{AB}`
|$\breve{a}$ `\breve{a}`|$\underleftarrow{AB}$ `\underleftarrow{AB}` |$\underrightarrow{AB}$ `\underrightarrow{AB}`
|$\check{a}$ `\check{a}`|$\overleftharpoon{ac}$ `\overleftharpoon{ac}`  |$\overrightharpoon{ac}$ `\overrightharpoon{ac}`
|$\dot{a}$ `\dot{a}` |$\overleftrightarrow{AB}$ `\overleftrightarrow{AB}`  |$\overbrace{AB}$ `\overbrace{AB}`
|$\ddot{a}$ `\ddot{a}`  |$\underleftrightarrow{AB}$ `\underleftrightarrow{AB}`|$\underbrace{AB}$ `\underbrace{AB}`
|$\grave{a}$ `\grave{a}`|$\overline{AB}$ `\overline{AB}` |$\overlinesegment{AB}$ `\overlinesegment{AB}`
|$\hat{\theta}$ `\hat{\theta}`|$\underline{AB}$ `\underline{AB}`  |$\underlinesegment{AB}$ `\underlinesegment{AB}`
|$\widehat{ac}$ `\widehat{ac}`|$\widecheck{ac}$ `\widecheck{ac}`  |

***Accent functions inside \\text{…}***

|||||
|:---------------------|:---------------------|:---------------------|:-----
|$\text{\'{a}}$ `\'{a}`|$\text{\~{a}}$ `\~{a}`|$\text{\.{a}}$ `\.{a}`|$\text{\H{a}}$ `\H{a}`
|$\text{\`{a}}$ <code>\\\`{a}</code>|$\text{\={a}}$ `\={a}`|$\text{\"{a}}$ `\"{a}`|$\text{\v{a}}$ `\v{a}`
|$\text{\^{a}}$ `\^{a}`|$\text{\u{a}}$ `\u{a}`|$\text{\r{a}}$ `\r{a}`|

See also [letters](#letters)

## Delimiters

||||||
|:-----------------------------------|:---------------------------------------|:----------|:-------------------------------------------------------|:-----
|$(~)$ `( )` |$\lparen~\rparen$ `\lparen`<br>$~~~~$`\rparen`|$⌈~⌉$ `⌈ ⌉`|$\lceil~\rceil$ `\lceil`<br>$~~~~~$`\rceil`  |$\uparrow$ `\uparrow`
|$[~]$ `[ ]` |$\lbrack~\rbrack$ `\lbrack`<br>$~~~~$`\rbrack`|$⌊~⌋$ `⌊ ⌋`|$\lfloor~\rfloor$ `\lfloor`<br>$~~~~~$`\rfloor` |$\downarrow$ `\downarrow`
|$\{ \}$ `\{ \}`|$\lbrace \rbrace$ `\lbrace`<br>$~~~~$`\rbrace`|$⎰⎱$ `⎰⎱`  |$\lmoustache \rmoustache$ `\lmoustache`<br>$~~~~$`\rmoustache`|$\updownarrow$ `\updownarrow`
|$⟨~⟩$ `⟨ ⟩` |$\langle~\rangle$ `\langle`<br>$~~~~$`\rangle`|$⟮~⟯$ `⟮ ⟯`|$\lgroup~\rgroup$ `\lgroup`<br>$~~~~~$`\rgroup` |$\Uparrow$ `\Uparrow`
|$\vert$ <code>&#124;</code> |$\vert$ `\vert` |$┌ ┐$ `┌ ┐`|$\ulcorner \urcorner$ `\ulcorner`<br>$~~~~$`\urcorner`  |$\Downarrow$ `\Downarrow`
|$\Vert$ <code>&#92;&#124;</code> |$\Vert$ `\Vert` |$└ ┘$ `└ ┘`|$\llcorner \lrcorner$ `\llcorner`<br>$~~~~$`\lrcorner`  |$\Updownarrow$ `\Updownarrow`
|$\lvert~\rvert$ `\lvert`<br>$~~~~$`\rvert`|$\lVert~\rVert$ `\lVert`<br>$~~~~~$`\rVert` |`\left.`|  `\right.` |$\backslash$ `\backslash`
|$\lang~\rang$ `\lang`<br>$~~~~$`\rang`|$\lt~\gt$ `\lt \gt`|

**Delimiter Sizing**

$\left(\LARGE{AB}\right)$ `\left(\LARGE{AB}\right)`

$( \big( \Big( \bigg( \Bigg($ `( \big( \Big( \bigg( \Bigg(`

||||||
|:--------|:------|:--------|:-------|:------|
|`\left`  |`\big` |`\bigl`  |`\bigm` |`\bigr`
|`\middle`|`\Big` |`\Bigl`  |`\Bigm` | `\Bigr`
|`\right` |`\bigg`|`\biggl` |`\biggm`|`\biggr`
|         |`\Bigg`|`\Biggl` |`\Biggm`|`\Biggr`

</div>

## Environments

<div class="katex-cards" id="environments">

|||||
|:---------------------|:---------------------|:---------------------|:--------
|$\begin{matrix} a & b \\ c & d \end{matrix}$ | `\begin{matrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{matrix}` |$\begin{array}{cc}a & b\\c & d\end{array}$ | `\begin{array}{cc}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{array}`
|$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ |`\begin{pmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{pmatrix}` |$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ | `\begin{bmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{bmatrix}`
|$\begin{vmatrix} a & b \\ c & d \end{vmatrix}$ |`\begin{vmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{vmatrix}` |$\begin{Vmatrix} a & b \\ c & d \end{Vmatrix}$ |`\begin{Vmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{Vmatrix}`
|$\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}$ |`\begin{Bmatrix}`<br>&nbsp;&nbsp;&nbsp;`a & b \\`<br>&nbsp;&nbsp;&nbsp;`c & d`<br>`\end{Bmatrix}`|$\def\arraystretch{1.5}\begin{array}{c:c:c} a & b & c \\ \hline d & e & f \\ \hdashline g & h & i \end{array}$|`\def\arraystretch{1.5}`<br>&nbsp;&nbsp;&nbsp;`\begin{array}{c:c:c}`<br>&nbsp;&nbsp;&nbsp;`a & b & c \\ \hline`<br>&nbsp;&nbsp;&nbsp;`d & e & f \\`<br>&nbsp;&nbsp;&nbsp;`\hdashline`<br>&nbsp;&nbsp;&nbsp;`g & h & i`<br>`\end{array}`
|$\begin{aligned} a&=b+c \\ d+e&=f \end{aligned}$ |`\begin{aligned}`<br>&nbsp;&nbsp;&nbsp;`a&=b+c \\`<br>&nbsp;&nbsp;&nbsp;`d+e&=f`<br>`\end{aligned}`|$\begin{alignedat}{2}10&x+&3&y=2\\3&x+&13&y=4\end{alignedat}$ |`\begin{alignedat}{2}`<br>&nbsp;&nbsp;&nbsp;`10&x+ &3&y = 2 \\`<br>&nbsp;&nbsp;&nbsp;` 3&x+&13&y = 4`<br>`\end{alignedat}`
|$\begin{gathered} a=b \\ e=b+c \end{gathered}$ |`\begin{gathered}`<br>&nbsp;&nbsp;&nbsp;`a=b \\ `<br>&nbsp;&nbsp;&nbsp;`e=b+c`<br>`\end{gathered}`|$x = \begin{cases} a &\text{if } b \\ c &\text{if } d \end{cases}$ |`x = \begin{cases}`<br>&nbsp;&nbsp;&nbsp;`a &\text{if } b  \\`<br>&nbsp;&nbsp;&nbsp;`c &\text{if } d`<br>`\end{cases}`

</div>

KaTeX also supports `darray`  and `dcases`.

Acceptable line separators include: `\\`, `\cr`, `\\[distance]`, and `\cr[distance]`. *Distance* can be written with any of the [KaTeX units](#units).

The `{array}` environment supports `|` and `:` vertical separators.

The `{array}` environment does not yet support `\cline` or `\multicolumn`.

<div class="katex-hopscotch">

## HTML

|||
|:----------------|:-------------------|
| $\href{https://katex.org/}{\KaTeX}$ | `\href{https://katex.org/}{\KaTeX}` |
| $\url{https://katex.org/}$ | `\url{https://katex.org/}` |

## Letters and Unicode

**Greek Letters**

Direct Input: $Α Β Γ Δ Ε Ζ Η Θ Ι \allowbreak Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω$
$\allowbreak α β γ δ ϵ ζ η θ ι κ λ μ ν ξ o π \allowbreak ρ σ τ υ ϕ χ ψ ω ε ϑ ϖ ϱ ς φ$

|||||
|---------------|-------------|-------------|---------------|
| $\Alpha$ `\Alpha` | $\Beta$ `\Beta` | $\Gamma$ `\Gamma`| $\Delta$ `\Delta`
| $\Epsilon$ `\Epsilon` | $\Zeta$ `\Zeta` | $\Eta$ `\Eta` | $\Theta$ `\Theta`
| $\Iota$ `\Iota` | $\Kappa$ `\Kappa` | $\Lambda$ `\Lambda` | $\Mu$ `\Mu`
| $\Nu$ `\Nu` | $\Xi$ `\Xi` | $\Omicron$ `\Omicron` | $\Pi$ `\Pi`
| $\Sigma$ `\Sigma` | $\Tau$ `\Tau` | $\Upsilon$ `\Upsilon` | $\Phi$ `\Phi`
| $\Chi$ `\Chi` | $\Psi$ `\Psi`| $\Omega$ `\Omega`
| $\varGamma$ `\varGamma`| $\varDelta$ `\varDelta` | $\varTheta$ `\varTheta` | $\varLambda$ `\varLambda`  |
| $\varXi$ `\varXi`| $\varPi$ `\varPi` | $\varSigma$ `\varSigma` | $\varUpsilon$ `\varUpsilon` |
| $\varPhi$ `\varPhi`  | $\varPsi$ `\varPsi`| $\varOmega$ `\varOmega` ||
| $\alpha$ `\alpha`| $\beta$ `\beta`  | $\gamma$ `\gamma` | $\delta$ `\delta`|
| $\epsilon$ `\epsilon` | $\zeta$ `\zeta`  | $\eta$ `\eta`| $\theta$ `\theta`|
| $\iota$ `\iota` | $\kappa$ `\kappa` | $\lambda$ `\lambda`| $\mu$ `\mu`|
| $\nu$ `\nu`| $\xi$ `\xi` | $\omicron$ `\omicron`  | $\pi$ `\pi`|
| $\rho$ `\rho`  | $\sigma$ `\sigma` | $\tau$ `\tau`| $\upsilon$ `\upsilon` |
| $\phi$ `\phi`  | $\chi$ `\chi`| $\psi$ `\psi`| $\omega$ `\omega`|
| $\varepsilon$ `\varepsilon` | $\varkappa$ `\varkappa` | $\vartheta$ `\vartheta` | $\thetasym$ `\thetasym`
| $\varpi$ `\varpi`| $\varrho$ `\varrho`  | $\varsigma$ `\varsigma` | $\varphi$ `\varphi`
| $\digamma$ `\digamma`

**Other Letters**

||||||
|:----------|:----------|:----------|:----------|:----------|
|$\imath$ `\imath`|$\nabla$ `\nabla`|$\Im$ `\Im`|$\Reals$ `\Reals`|$\text{\OE}$ `\text{\OE}`
|$\jmath$ `\jmath`|$\partial$ `\partial`|$\image$ `\image`|$\wp$ `\wp`|$\text{\o}$ `\text{\o}`
|$\aleph$ `\aleph`|$\Game$ `\Game`|$\Bbbk$ `\Bbbk`|$\weierp$ `\weierp`|$\text{\O}$ `\text{\O}`
|$\alef$ `\alef`|$\Finv$ `\Finv`|$\N$ `\N`|$\Z$ `\Z`|$\text{\ss}$ `\text{\ss}`
|$\alefsym$ `\alefsym`|$\cnums$ `\cnums`|$\natnums$ `\natnums`|$\text{\aa}$ `\text{\aa}`|$\text{\i}$ `\text{\i}`
|$\beth$ `\beth`|$\Complex$ `\Complex`|$\R$ `\R`|$\text{\AA}$ `\text{\AA}`|$\text{\j}$ `\text{\j}`
|$\gimel$ `\gimel`|$\ell$ `\ell`|$\Re$ `\Re`|$\text{\ae}$ `\text{\ae}`
|$\daleth$ `\daleth`|$\hbar$ `\hbar`|$\real$ `\real`|$\text{\AE}$ `\text{\AE}`
|$\eth$ `\eth`|$\hslash$ `\hslash`|$\reals$ `\reals`|$\text{\oe}$ `\text{\oe}`

Direct Input: $∂ ∇ ℑ Ⅎ ℵ ℶ ℷ ℸ ⅁ ℏ ð$
ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝÞßàáâãäåçèéêëìíîïðñòóôöùúûüýþÿ

</div>
<div class="katex-cards" id="math-alpha">

**Unicode Mathematical Alphanumeric Symbols**

| Item        |  Range              |  Item             |  Range  |
|-------------|---------------------|-------------------|---------------|
| Bold        | $\text{𝐀-𝐙 𝐚-𝐳 𝟎-𝟗}$  | Double-struck     | $\text{𝔸-}ℤ\ 𝕜$
| Italic      | $\text{𝐴-𝑍 𝑎-𝑧}$      | Sans serif        | $\text{𝖠-𝖹 𝖺-𝗓 𝟢-𝟫}$
| Bold Italic | $\text{𝑨-𝒁 𝒂-𝒛}$      | Sans serif bold   | $\text{𝗔-𝗭 𝗮-𝘇 𝟬-𝟵}$
| Script      | $\text{𝒜-𝒵}$         | Sans serif italic | $\text{𝘈-𝘡 𝘢-𝘻}$
|  Fractur    | $\text{𝔄-}ℨ\text{ 𝔞-𝔷}$| Monospace        | $\text{𝙰-𝚉 𝚊-𝚣 𝟶-𝟿}$

</div>
<div class="katex-hopscotch">

**Unicode**

The letters listed above will render in any KaTeX rendering mode.

If the KaTeX rendering mode is set to `strict: false` or `strict:"warn"` (default), then KaTeX will accept all Unicode letters. The letters not listed above will be rendered from system fonts, not KaTeX-supplied fonts, so their typography may clash. They may also cause small vertical alignment issues. KaTeX has detailed metrics for glyphs in Latin, Greek, and Cyrillic, but other glyphs are treated as if they are each as tall as the letter M.

For Persian composite characters, a user-supplied [plug-in](https://github.com/HosseinAgha/persian-katex-plugin) is under development.

## Layout

### Annotation

|||
|:------------------------------|:-----
|$\cancel{5}$ `\cancel{5}`|$\overbrace{a+b+c}^{\text{note}}$ `\overbrace{a+b+c}^{\text{note}}`
|$\bcancel{5}$ `\bcancel{5}` |$\underbrace{a+b+c}_{\text{note}}$ `\underbrace{a+b+c}_{\text{note}}`
|$\xcancel{ABC}$ `\xcancel{ABC}`|$\not =$ `\not =`
|$\sout{abc}$ `\sout{abc}`|$\boxed{\pi=\frac c d}$ `\boxed{\pi=\frac c d}`

`\tag{hi} x+y^{2x}`
$$\tag{hi} x+y^{2x}$$

`\tag*{hi} x+y^{2x}`
$$\tag*{hi} x+y^{2x}$$

### Line Breaks

KaTeX 0.10.0+ will insert automatic line breaks in inline math after relations or binary operators such as “=” or “+”. These can be suppressed by `\nobreak` or by placing math inside a pair of braces, as in `{F=ma}`. `\allowbreak` will allow automatic line breaks at locations other than relations or operators.

Hard line breaks are `\\` and `\newline`.

In display math, KaTeX does not insert automatic line breaks. It ignores display math hard line breaks when rendering option `strict: true`.

### Vertical Layout

||||
|:--------------|:----------------------------------------|:-----
|$x_n$ `x_n` |$\stackrel{!}{=}$ `\stackrel{!}{=}`  |$a \atop b$ `a \atop b`
|$e^x$ `e^x` |$\overset{!}{=}$ `\overset{!}{=}` |$a\raisebox{0.25em}{b}c$ `a\raisebox{0.25em}{b}c`
|$_u^o $ `_u^o `|$\underset{!}{=}$ `\underset{!}{=}`

The second argument of `\raisebox` can contain math if it is nested within `$…$` delimiters, as in `\raisebox{0.25em}{$\frac a b$}`

### Overlap and Spacing

|||
|:-------|:-------|
|${=}\mathllap{/\,}$ `{=}\mathllap{/\,}` | $\left(x^{\smash{2}}\right)$ `\left(x^{\smash{2}}\right)`
|$\mathrlap{\,/}{=}$ `\mathrlap{\,/}{=}` | $\sqrt{\smash[b]{y}}$ `\sqrt{\smash[b]{y}} `

$\displaystyle\sum_{\mathclap{1\le i\le j\le n}} x_{ij}$ `\sum_{\mathclap{1\le i\le j\le n}} x_{ij}`

KaTeX also supports `\llap`, `\rlap`, and `\clap`, but they will take only text, not math, as arguments.

</div>
<div class="katex-cards" id="spacing-tbl">

**Spacing**

| Function        | Produces           | Function             | Produces|
|:----------------|:-------------------|:---------------------|:--------------------------------------|
| `\,`            | ³∕₁₈ em space      | `\kern{distance}`    | space, width = *distance*
| `\thinspace`    | ³∕₁₈ em space      | `\mkern{distance}`   | space, width = *distance*
| `\:`            | ⁴∕₁₈ em space      | `\mskip{distance}`   | space, width = *distance*
| `\medspace`     | ⁴∕₁₈ em space      | `\hskip{distance}`   | space, width = *distance*
| `\;`            | ⁵∕₁₈ em space      | `\hspace{distance}`  | space, width = *distance*
| `\thickspace`   | ⁵∕₁₈ em space      | `\hspace*{distance}` | space, width = *distance*
| `\enspace`      | ½ em space         | `\phantom{content}`  | space the width and height of content
| `\quad`         | 1 em space         | `\hphantom{content}` | space the width of content
| `\qquad`        | 2 em space         | `\vphantom{content}` | a strut the height of content
| `~`             | non-breaking space | `\!`                 | – ³∕₁₈ em space
| `\<space>`      | space              | `\negthinspace`      | – ³∕₁₈ em space
| `\nobreakspace` | non-breaking space | `\negmedspace`       | – ⁴∕₁₈ em space
| `\space`        | space              | `\negthickspace`     | – ⁵∕₁₈ em space

</div>

**Notes:**

`distance` will accept any of the [KaTeX units](#units).

`\kern`, `\mkern`, `\mskip`, and `\hspace` accept unbraced distances, as in: `\kern1em`.

`\mkern` and `\mskip` will not work in text mode and both will write a console warning for any unit except `mu`.

<div class="katex-hopscotch">

## Logic and Set Theory

|||||
|:--------------------|:--------------------------|:----------------------------|:-----
|$\forall$ `\forall`  |$\complement$ `\complement`|$\therefore$ `\therefore`    |$\emptyset$ `\emptyset`
|$\exists$ `\exists`  |$\subset$ `\subset`  |$\because$ `\because`              |$\empty$ `\empty`
|$\exist$ `\exist`    |$\supset$ `\supset`  |$\mapsto$ `\mapsto`                |$\varnothing$ `\varnothing`
|$\nexists$ `\nexists`|$\mid$ `\mid`        |$\to$ `\to`                        |$\implies$ `\implies`
|$\in$ `\in`          |$\land$ `\land`      |$\gets$ `\gets`                    |$\impliedby$ `\impliedby`
|$\isin$ `\isin`      |$\lor$ `\lor`        |$\leftrightarrow$ `\leftrightarrow`|$\iff$ `\iff`
|$\notin$ `\notin`    |$\ni$ `\ni`          |$\notni$ `\notni`                  |$\neg$ `\neg` or `\lnot`

Direct Input: $∀ ∴ ∁ ∵ ∃ ∣ ∈ ∉ ∋ ⊂ ⊃ ∧ ∨ ↦ → ← ↔ ¬$ ℂ ℍ ℕ ℙ ℚ ℝ

## Macros

|||
|:-------------------------------------|:------
|$\def\foo{x^2} \foo + \foo$           | `\def\foo{x^2} \foo + \foo`
|$\gdef\bar#1{#1^2} \bar{y} + \bar{y}$ | `\gdef\bar#1{#1^2} \bar{y} + \bar{y}`
|                                      | `\global\def\macroname#1#2…{definition}`
|                                      | `\newcommand\macroname[numargs]{definition}`
|                                      | `\renewcommand\macroname[numargs]{definition}`
|                                      | `\providecommand\macroname[numargs]{definition}`

Macros can also be defined in the KaTeX rendering options.

Macros accept up to nine arguments: #1, #2, etc.

`\gdef` and `\global\def` macros will persist between math expressions.

Available functions include:

`\char` `\mathchoice` `\TextOrMath` `\@ifstar` `\@ifnextchar` `\@firstoftwo` `\@secondoftwo` `\relax`

@ is a valid character for commands, as if `\makeatletter` were in effect.

## Operators

### Big Operators

|||||
|------------------|-------------------------|--------------------------|--------------|
| $\sum$ `\sum`    | $\prod$ `\prod`         | $\bigotimes$ `\bigotimes`| $\bigvee$ `\bigvee`
| $\int$ `\int`    | $\coprod$ `\coprod`     | $\bigoplus$ `\bigoplus`  | $\bigwedge$ `\bigwedge`
| $\iint$ `\iint`  | $\intop$ `\intop`       | $\bigodot$ `\bigodot`    | $\bigcap$ `\bigcap`
| $\iiint$ `\iiint`| $\smallint$ `\smallint` | $\biguplus$ `\biguplus`  | $\bigcup$ `\bigcup`
| $\oint$ `\oint`  | $\oiint$ `\oiint`       | $\oiiint$ `\oiiint`      | $\bigsqcup$ `\bigsqcup`

Direct Input: $∫ ∬ ∭ ∮ ∏ ∐ ∑ ⋀ ⋁ ⋂ ⋃ ⨀ ⨁ ⨂ ⨄ ⨆$

### Binary Operators

|||||
|-------------|-------------------|-------------------|--------------------|
| $+$ `+`| $\cdot$ `\cdot`  | $\gtrdot$ `\gtrdot`| $x \pmod a$ `x \pmod a`|
| $-$ `-`| $\cdotp$ `\cdotp` | $\intercal$ `\intercal` | $x \pod a$ `x \pod a` |
| $/$ `/`| $\centerdot$ `\centerdot`| $\land$ `\land`  | $\rhd$ `\rhd` |
| $*$ `*`| $\circ$ `\circ`  | $\leftthreetimes$ `\leftthreetimes` | $\rightthreetimes$ `\rightthreetimes` |
| $\amalg$ `\amalg` | $\circledast$ `\circledast`  | $\ldotp$ `\ldotp` | $\rtimes$ `\rtimes` |
| $\And$ `\And`| $\circledcirc$ `\circledcirc` | $\lor$ `\lor`| $\setminus$ `\setminus`  |
| $\ast$ `\ast`| $\circleddash$ `\circleddash` | $\lessdot$ `\lessdot`  | $\smallsetminus$ `\smallsetminus`|
| $\barwedge$ `\barwedge` | $\Cup$ `\Cup`| $\lhd$ `\lhd`| $\sqcap$ `\sqcap`  |
| $\bigcirc$ `\bigcirc`  | $\cup$ `\cup`| $\ltimes$ `\ltimes`| $\sqcup$ `\sqcup`  |
| $\bmod$ `\bmod`  | $\curlyvee$ `\curlyvee` | $x \mod a$ `x\mod a`| $\times$ `\times`  |
| $\boxdot$ `\boxdot`| $\curlywedge$ `\curlywedge`  | $\mp$ `\mp` | $\unlhd$ `\unlhd`  |
| $\boxminus$ `\boxminus` | $\div$ `\div`| $\odot$ `\odot`  | $\unrhd$ `\unrhd`  |
| $\boxplus$ `\boxplus`  | $\divideontimes$ `\divideontimes`  | $\ominus$ `\ominus`| $\uplus$ `\uplus`  |
| $\boxtimes$ `\boxtimes` | $\dotplus$ `\dotplus`  | $\oplus$ `\oplus` | $\vee$ `\vee` |
| $\bullet$ `\bullet`| $\doublebarwedge$ `\doublebarwedge` | $\otimes$ `\otimes`| $\veebar$ `\veebar` |
| $\Cap$ `\Cap`| $\doublecap$ `\doublecap`| $\oslash$ `\oslash`| $\wedge$ `\wedge`  |
| $\cap$ `\cap`| $\doublecup$ `\doublecup`| $\pm$ `\pm` or `\plusmn` | $\wr$ `\wr`  |

Direct Input: $+ - / * ⋅ ± × ÷ ∓ ∔ ∧ ∨ ∩ ∪ ≀ ⊎ ⊓ ⊔ ⊕ ⊖ ⊗ ⊘ ⊙ ⊚ ⊛ ⊝$

### Fractions and Binomials

||||
|:--------------------------|:----------------------------|:-----
|$\frac{a}{b}$ `\frac{a}{b}`|$\tfrac{a}{b}$ `\tfrac{a}{b}`|$\genfrac ( ] {2pt}{1}a{a+1}$ `\genfrac ( ] {2pt}{1}a{a+1}`
|${a \over b}$ `{a \over b}`|$\dfrac{a}{b}$ `\dfrac{a}{b}`|${a \above{2pt} b+1}$ `{a \above{2pt} b+1}`
|$a/b$ `a/b`                |  |$\cfrac{a}{1 + \cfrac{1}{b}}$ `\cfrac{a}{1 + \cfrac{1}{b}}`

||||
|:------------------------------|:------------------------------|:--------
|$\binom{n}{k}$ `\binom{n}{k}`  |$\dbinom{n}{k}$ `\dbinom{n}{k}`|${n\brace k}$ `{n\brace k}`
|${n \choose k}$ `{n \choose k}`|$\tbinom{n}{k}$ `\tbinom{n}{k}`|${n\brack k}$ `{n\brack k}`

### Math Operators

|||||
|-----------|---------|-----------------|-----------|
| $\arcsin$ `\arcsin` | $\cotg$ `\cotg` | $\ln$ `\ln`  | $\det$ `\det` |
| $\arccos$ `\arccos` | $\coth$ `\coth` | $\log$ `\log` | $\gcd$ `\gcd` |
| $\arctan$ `\arctan` | $\csc$ `\csc`  | $\sec$ `\sec` | $\inf$ `\inf` |
| $\arctg$ `\arctg`  | $\ctg$ `\ctg`  | $\sin$ `\sin` | $\lim$ `\lim` |
| $\arcctg$ `\arcctg` | $\cth$ `\cth`  | $\sinh$ `\sinh`| $\liminf$ `\liminf` |
| $\arg$ `\arg` | $\deg$ `\deg`  | $\sh$ `\sh`  | $\limsup$ `\limsup` |
| $\ch$ `\ch`  | $\dim$ `\dim`  | $\tan$ `\tan` | $\max$ `\max` |
| $\cos$ `\cos` | $\exp$ `\exp`  | $\tanh$ `\tanh`| $\min$ `\min` |
| $\cosec$ `\cosec`  | $\hom$ `\hom`  | $\tg$ `\tg`  | $\Pr$ `\Pr`  |
| $\cosh$ `\cosh`| $\ker$ `\ker`  | $\th$ `\th`  | $\sup$ `\sup` |
| $\cot$ `\cot` | $\lg$ `\lg`| $\operatorname{f}$ `\operatorname{f}` |

Functions on the right column of this table can take `\limits`.

### \sqrt

$\sqrt{x}$ `\sqrt{x}`

$\sqrt[3]{x}$ `\sqrt[3]{x}`

## Relations

$\stackrel{!}{=}$ `\stackrel{!}{=}`

|||||
|:----------------------------|:--------------------------------|:--------------------------------|:-----
|$=$ `=` |$\eqcirc$ `\eqcirc`  |$\lesseqgtr$ `\lesseqgtr`  |$\sqsupset$ `\sqsupset`
|$<$ `<` |$\eqcolon$ `\eqcolon`|$\lesseqqgtr$ `\lesseqqgtr`|$\sqsupseteq$ `\sqsupseteq`
|$>$ `>` |$\Eqcolon$ `\Eqcolon`|$\lessgtr$ `\lessgtr`|$\Subset$ `\Subset`
|$:$ `:` |$\eqqcolon$ `\eqqcolon` |$\lesssim$ `\lesssim`|$\subset$ `\subset` or `\sub`
|$\approx$ `\approx` |$\Eqqcolon$ `\Eqqcolon` |$\ll$ `\ll` |$\subseteq$ `\subseteq` or `\sube`
|$\approxeq$ `\approxeq`|$\eqsim$ `\eqsim` |$\lll$ `\lll`  |$\subseteqq$ `\subseteqq`
|$\asymp$ `\asymp`|$\eqslantgtr$ `\eqslantgtr`|$\llless$ `\llless`  |$\succ$ `\succ`
|$\backepsilon$ `\backepsilon`|$\eqslantless$ `\eqslantless` |$\lt$ `\lt` |$\succapprox$ `\succapprox`
|$\backsim$ `\backsim`  |$\equiv$ `\equiv` |$\mid$ `\mid`  |$\succcurlyeq$ `\succcurlyeq`
|$\backsimeq$ `\backsimeq` |$\fallingdotseq$ `\fallingdotseq`|$\models$ `\models`  |$\succeq$ `\succeq`
|$\between$ `\between`  |$\frown$ `\frown` |$\multimap$ `\multimap` |$\succsim$ `\succsim`
|$\bowtie$ `\bowtie` |$\ge$ `\ge` |$\owns$ `\owns`|$\Supset$ `\Supset`
|$\bumpeq$ `\bumpeq` |$\geq$ `\geq`  |$\parallel$ `\parallel` |$\supset$ `\supset`
|$\Bumpeq$ `\Bumpeq` |$\geqq$ `\geqq`|$\perp$ `\perp`|$\supseteq$ `\supseteq` or `\supe`
|$\circeq$ `\circeq` |$\geqslant$ `\geqslant` |$\pitchfork$ `\pitchfork`  |$\supseteqq$ `\supseteqq`
|$\colonapprox$ `\colonapprox`|$\gg$ `\gg` |$\prec$ `\prec`|$\thickapprox$ `\thickapprox`
|$\Colonapprox$ `\Colonapprox`|$\ggg$ `\ggg`  |$\precapprox$ `\precapprox`|$\thicksim$ `\thicksim`
|$\coloneq$ `\coloneq`  |$\gggtr$ `\gggtr` |$\preccurlyeq$ `\preccurlyeq` |$\trianglelefteq$ `\trianglelefteq`
|$\Coloneq$ `\Coloneq`  |$\gt$ `\gt` |$\preceq$ `\preceq`  |$\triangleq$ `\triangleq`
|$\coloneqq$ `\coloneqq`|$\gtrapprox$ `\gtrapprox`  |$\precsim$ `\precsim`|$\trianglerighteq$ `\trianglerighteq`
|$\Coloneqq$ `\Coloneqq`|$\gtreqless$ `\gtreqless`  |$\propto$ `\propto`  |$\varpropto$ `\varpropto`
|$\colonsim$ `\colonsim`|$\gtreqqless$ `\gtreqqless`|$\risingdotseq$ `\risingdotseq`  |$\vartriangle$ `\vartriangle`
|$\Colonsim$ `\Colonsim`|$\gtrless$ `\gtrless`|$\shortmid$ `\shortmid` |$\vartriangleleft$ `\vartriangleleft`
|$\cong$ `\cong`  |$\gtrsim$ `\gtrsim`  |$\shortparallel$ `\shortparallel`|$\vartriangleright$ `\vartriangleright`
|$\curlyeqprec$ `\curlyeqprec`|$\in$ `\in` or `\isin` |$\sim$ `\sim`  |$\vcentcolon$ `\vcentcolon`
|$\curlyeqsucc$ `\curlyeqsucc`|$\Join$ `\Join`|$\simeq$ `\simeq` |$\vdash$ `\vdash`
|$\dashv$ `\dashv`|$\le$ `\le` |$\smallfrown$ `\smallfrown`|$\vDash$ `\vDash`
|$\dblcolon$ `\dblcolon`|$\leq$ `\leq`  |$\smallsmile$ `\smallsmile`|$\Vdash$ `\Vdash`
|$\doteq$ `\doteq`|$\leqq$ `\leqq`|$\smile$ `\smile` |$\Vvdash$ `\Vvdash`
|$\Doteq$ `\Doteq`|$\leqslant$ `\leqslant` |$\sqsubset$ `\sqsubset` |
|$\doteqdot$ `\doteqdot`|$\lessapprox$ `\lessapprox`|$\sqsubseteq$ `\sqsubseteq`|


Direct Input: $= < > : ∈ ∋ ∝ ∼ ∽ ≂ ≃ ≅ ≈ ≊ ≍ ≎ ≏ ≐ ≑ ≒ ≓ ≖ ≗ ≜ ≡ ≤ ≥ ≦ ≧ ≫ ≬ ≳ ≷ ≺ ≻ ≼ ≽ ≾ ≿ ⊂ ⊃ ⊆ ⊇ ⊏ ⊐ ⊑ ⊒ ⊢ ⊣ ⊩ ⊪ ⊸ ⋈ ⋍ ⋐ ⋑ ⋔ ⋙ ⋛ ⋞ ⋟ ⌢ ⌣ ⩾ ⪆ ⪌ ⪕ ⪖ ⪯ ⪰ ⪷ ⪸ ⫅ ⫆ ≲ ⩽ ⪅ ≶ ⋚ ⪋ ⟂ ⊨$ `≔ ≕ ⩴`

### Negated Relations

$\not =$ `\not =`

|||||
|--------------|-------------------|---------------------|------------------|
| $\gnapprox$ `\gnapprox`  | $\ngeqslant$ `\ngeqslant`| $\nsubseteq$ `\nsubseteq`  | $\precneqq$ `\precneqq`|
| $\gneq$ `\gneq`| $\ngtr$ `\ngtr`  | $\nsubseteqq$ `\nsubseteqq` | $\precnsim$ `\precnsim`|
| $\gneqq$ `\gneqq`  | $\nleq$ `\nleq`  | $\nsucc$ `\nsucc`| $\subsetneq$ `\subsetneq`  |
| $\gnsim$ `\gnsim`  | $\nleqq$ `\nleqq` | $\nsucceq$ `\nsucceq` | $\subsetneqq$ `\subsetneqq` |
| $\gvertneqq$ `\gvertneqq` | $\nleqslant$ `\nleqslant`| $\nsupseteq$ `\nsupseteq`  | $\succnapprox$ `\succnapprox`|
| $\lnapprox$ `\lnapprox`  | $\nless$ `\nless` | $\nsupseteqq$ `\nsupseteqq` | $\succneqq$ `\succneqq`|
| $\lneq$ `\lneq`| $\nmid$ `\nmid`  | $\ntriangleleft$ `\ntriangleleft` | $\succnsim$ `\succnsim`|
| $\lneqq$ `\lneqq`  | $\notin$ `\notin` | $\ntrianglelefteq$ `\ntrianglelefteq`  | $\supsetneq$ `\supsetneq`  |
| $\lnsim$ `\lnsim`  | $\notni$ `\notni` | $\ntriangleright$ `\ntriangleright`| $\supsetneqq$ `\supsetneqq` |
| $\lvertneqq$ `\lvertneqq` | $\nparallel$ `\nparallel`| $\ntrianglerighteq$ `\ntrianglerighteq` | $\varsubsetneq$ `\varsubsetneq`  |
| $\ncong$ `\ncong`  | $\nprec$ `\nprec` | $\nvdash$ `\nvdash`  | $\varsubsetneqq$ `\varsubsetneqq` |
| $\ne$ `\ne`  | $\npreceq$ `\npreceq`  | $\nvDash$ `\nvDash`  | $\varsupsetneq$ `\varsupsetneq`  |
| $\neq$ `\neq` | $\nshortmid$ `\nshortmid`| $\nVDash$ `\nVDash`  | $\varsupsetneqq$ `\varsupsetneqq` |
| $\ngeq$ `\ngeq`| $\nshortparallel$ `\nshortparallel` | $\nVdash$ `\nVdash`  |
| $\ngeqq$ `\ngeqq`  | $\nsim$ `\nsim`  | $\precnapprox$ `\precnapprox`|

Direct Input: $∉ ∌ ∤ ∦ ≁ ≆ ≠ ≨ ≩ ≮ ≯ ≰ ≱ ⊀ ⊁ ⊈ ⊉ ⊊ ⊋ ⊬ ⊭ ⊮ ⊯ ⋠ ⋡ ⋦ ⋧ ⋨ ⋩ ⋬ ⋭ ⪇ ⪈ ⪉ ⪊ ⪵ ⪶ ⪹ ⪺ ⫋ ⫌$

### Arrows

||||
|:----------|:----------|:----------|
|$\circlearrowleft$ `\circlearrowleft`|$\leftharpoonup$ `\leftharpoonup`|$\rArr$ `\rArr`
|$\circlearrowright$ `\circlearrowright`|$\leftleftarrows$ `\leftleftarrows`|$\rarr$ `\rarr`
|$\curvearrowleft$ `\curvearrowleft`|$\leftrightarrow$ `\leftrightarrow`|$\restriction$ `\restriction`
|$\curvearrowright$ `\curvearrowright`|$\Leftrightarrow$ `\Leftrightarrow`|$\rightarrow$ `\rightarrow`
|$\Darr$ `\Darr`|$\leftrightarrows$ `\leftrightarrows`|$\Rightarrow$ `\Rightarrow`
|$\dArr$ `\dArr`|$\leftrightharpoons$ `\leftrightharpoons`|$\rightarrowtail$ `\rightarrowtail`
|$\darr$ `\darr`|$\leftrightsquigarrow$ `\leftrightsquigarrow`|$\rightharpoondown$ `\rightharpoondown`
|$\dashleftarrow$ `\dashleftarrow`|$\Lleftarrow$ `\Lleftarrow`|$\rightharpoonup$ `\rightharpoonup`
|$\dashrightarrow$ `\dashrightarrow`|$\longleftarrow$ `\longleftarrow`|$\rightleftarrows$ `\rightleftarrows`
|$\downarrow$ `\downarrow`|$\Longleftarrow$ `\Longleftarrow`|$\rightleftharpoons$ `\rightleftharpoons`
|$\Downarrow$ `\Downarrow`|$\longleftrightarrow$ `\longleftrightarrow`|$\rightrightarrows$ `\rightrightarrows`
|$\downdownarrows$ `\downdownarrows`|$\Longleftrightarrow$ `\Longleftrightarrow`|$\rightsquigarrow$ `\rightsquigarrow`
|$\downharpoonleft$ `\downharpoonleft`|$\longmapsto$ `\longmapsto`|$\Rrightarrow$ `\Rrightarrow`
|$\downharpoonright$ `\downharpoonright`|$\longrightarrow$ `\longrightarrow`|$\Rsh$ `\Rsh`
|$\gets$ `\gets`|$\Longrightarrow$ `\Longrightarrow`|$\searrow$ `\searrow`
|$\Harr$ `\Harr`|$\looparrowleft$ `\looparrowleft`|$\swarrow$ `\swarrow`
|$\hArr$ `\hArr`|$\looparrowright$ `\looparrowright`|$\to$ `\to`
|$\harr$ `\harr`|$\Lrarr$ `\Lrarr`|$\twoheadleftarrow$ `\twoheadleftarrow`
|$\hookleftarrow$ `\hookleftarrow`|$\lrArr$ `\lrArr`|$\twoheadrightarrow$ `\twoheadrightarrow`
|$\hookrightarrow$ `\hookrightarrow`|$\lrarr$ `\lrarr`|$\Uarr$ `\Uarr`
|$\iff$ `\iff`|$\Lsh$ `\Lsh`|$\uArr$ `\uArr`
|$\impliedby$ `\impliedby`|$\mapsto$ `\mapsto`|$\uarr$ `\uarr`
|$\implies$ `\implies`|$\nearrow$ `\nearrow`|$\uparrow$ `\uparrow`
|$\Larr$ `\Larr`|$\nleftarrow$ `\nleftarrow`|$\Uparrow$ `\Uparrow`
|$\lArr$ `\lArr`|$\nLeftarrow$ `\nLeftarrow`|$\updownarrow$ `\updownarrow`
|$\larr$ `\larr`|$\nleftrightarrow$ `\nleftrightarrow`|$\Updownarrow$ `\Updownarrow`
|$\leadsto$ `\leadsto`|$\nLeftrightarrow$ `\nLeftrightarrow`|$\upharpoonleft$ `\upharpoonleft`
|$\leftarrow$ `\leftarrow`|$\nrightarrow$ `\nrightarrow`|$\upharpoonright$ `\upharpoonright`
|$\Leftarrow$ `\Leftarrow`|$\nRightarrow$ `\nRightarrow`|$\upuparrows$ `\upuparrows`
|$\leftarrowtail$ `\leftarrowtail`|$\nwarrow$ `\nwarrow`
|$\leftharpoondown$ `\leftharpoondown`|$\Rarr$ `\Rarr`

Direct Input: $← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ↚ ↛ ↞ ↠ ↢ ↣ ↦ ↩ ↪ ↫ ↬ ↭ ↮ ↰ ↱↶ ↷ ↺ ↻ ↼ ↽ ↾ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇄ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌⇍ ⇎ ⇏ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ⇚ ⇛ ⇝ ⇠ ⇢ ⟵ ⟶ ⟷ ⟸ ⟹ ⟺ ⟼$ ↽

**Extensible Arrows**

|||
|:----------------------------------------------------|:-----
|$\xleftarrow{abc}$ `\xleftarrow{abc}`                |$\xrightarrow[under]{over}$ `\xrightarrow[under]{over}`
|$\xLeftarrow{abc}$ `\xLeftarrow{abc}`                |$\xRightarrow{abc}$ `\xRightarrow{abc}`
|$\xleftrightarrow{abc}$ `\xleftrightarrow{abc}`      |$\xLeftrightarrow{abc}$ `\xLeftrightarrow{abc}`
|$\xhookleftarrow{abc}$ `\xhookleftarrow{abc}`        |$\xhookrightarrow{abc}$ `\xhookrightarrow{abc}`
|$\xtwoheadleftarrow{abc}$ `\xtwoheadleftarrow{abc}`  |$\xtwoheadrightarrow{abc}$ `\xtwoheadrightarrow{abc}`
|$\xleftharpoonup{abc}$ `\xleftharpoonup{abc}`        |$\xrightharpoonup{abc}$ `\xrightharpoonup{abc}`
|$\xleftharpoondown{abc}$ `\xleftharpoondown{abc}`    |$\xrightharpoondown{abc}$ `\xrightharpoondown{abc}`
|$\xleftrightharpoons{abc}$ `\xleftrightharpoons{abc}`|$\xrightleftharpoons{abc}$ `\xrightleftharpoons{abc}`
|$\xtofrom{abc}$ `\xtofrom{abc}`                      |$\xmapsto{abc}$ `\xmapsto{abc}`
|$\xlongequal{abc}$ `\xlongequal{abc}`

Extensible arrows all can take an optional argument in the same manner<br>as `\xrightarrow[under]{over}`.

## Style, Color, Size, and Font

**Class Assignment**

`\mathbin` `\mathclose` `\mathinner` `\mathop`<br>
`\mathopen` `\mathord` `\mathpunct` `\mathrel`

**Color**

$\color{blue} F=ma$  `\color{blue} F=ma`

Note that KaTeX `\color` acts like a switch. This aligns with LaTeX and differs from MathJax.
Other KaTeX color functions expect the content to be a function argument:

$\textcolor{blue}{F=ma}$ `\textcolor{blue}{F=ma}`<br>
$\textcolor{#228B22}{F=ma}$ `\textcolor{#228B22}{F=ma}`<br>
$\colorbox{aqua}{A}$ `\colorbox{aqua}{A}`<br>
$\fcolorbox{red}{aqua}{A}$ `\fcolorbox{red}{aqua}{A}`

For color definition, KaTeX color functions will accept the standard HTML [predefined color names](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords). They will also accept an RGB argument in CSS hexa­decimal style. The "#" is optional before a six-digit specification.

**Font**

||||
|:------------------------------|:------------------------------|:-----
|$\mathrm{Ab0}$ `\mathrm{Ab0}`  |$\mathbf{Ab0}$ `\mathbf{Ab0}`  |$\mathit{Ab}$ `\mathit{Ab}`
|$\mathnormal{Ab0}$ `\mathnormal{Ab0}`|$\textbf{Ab0}$ `\textbf{Ab0}`  |$\textit{Ab}$ `\textit{Ab}`
|$\textrm{Ab0}$ `\textrm{Ab0}`  |$\bf Ab0$ `\bf Ab0`            |$\it Ab$ `\it Ab`
|$\rm Ab0$ `\rm Ab0`            |$\bold{Ab0}$ `\bold{Ab0}`|$\Bbb{AB}$ `\Bbb{AB}`
|$\textnormal{Ab0}$ `\textnormal{Ab0}`|$\boldsymbol{Ab}$ `\boldsymbol{Ab}`|$\mathbb{AB}$ `\mathbb{AB}`
|$\text{Ab0}$ `\text{Ab0}`      |$\bm{Ab}$ `\bm{Ab}`            |$\frak{Ab0}$ `\frak{Ab0}`
|$\mathsf{Ab0}$ `\mathsf{Ab0}`  |$\mathtt{Ab0}$ `\mathtt{Ab0}`  |$\mathfrak{Ab0}$ `\mathfrak{Ab0}`
|$\textsf{Ab0}$ `\textsf{Ab0}`  |$\texttt{Ab0}$ `\texttt{Ab0}`  |$\mathcal{AB0}$ `\mathcal{AB0}`
|$\sf Ab0$ `\sf Ab0`            |$\tt Ab0$ `\tt Ab0`            |$\mathscr{AB}$ `\mathscr{AB}`

One can stack font family, font weight, and font shape by using the `\textXX` versions of the font functions. So `\textsf{\textbf{H}}` will produce $\textsf{\textbf{H}}$. The other versions do not stack, e.g., `\mathsf{\mathbf{H}}` will produce $\mathsf{\mathbf{H}}$.

In cases where KaTeX fonts do not have a bold glyph, `\pmb` can simulate one. For example, `\pmb{\mu}` renders as : $\pmb{\mu}$

**Size**

|||
|:----------------------|:-----
|$\Huge AB$ `\Huge AB`  |$\normalsize AB$ `\normalsize AB`
|$\huge AB$ `\huge AB`  |$\small AB$ `\small AB`
|$\LARGE AB$ `\LARGE AB`|$\footnotesize AB$ `\footnotesize AB`
|$\Large AB$ `\Large AB`|$\scriptsize AB$ `\scriptsize AB`
|$\large AB$ `\large AB`|$\tiny AB$ `\tiny AB`


**Style**

| |
|:-------------------------------------------------------|
|$\displaystyle\sum_{i=1}^n$ `\displaystyle\sum_{i=1}^n`
|$\textstyle\sum_{i=1}^n$ `\textstyle\sum_{i=1}^n`
|$\scriptstyle x$ `\scriptstyle x` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(The size of a first sub/superscript)
|$\scriptscriptstyle x$ `\scriptscriptstyle x` (The size of subsequent sub/superscripts)
|$\lim\limits_x$ `\lim\limits_x`
|$\lim\nolimits_x$ `\lim\nolimits_x`
|$\verb!x^2!$ `\verb!x^2!`

`\text{…}` will accept nested `$…$` fragments and render them in math mode.

## Symbols and Punctuation

||||
|:----------|:----------|:----------|
|`% comment`|$\dots$ `\dots`|$\KaTeX$ `\KaTeX`
|$\%$ `\%`|$\cdots$ `\cdots`|$\LaTeX$ `\LaTeX`
|$\#$ `\#`|$\ddots$ `\ddots`|$\TeX$ `\TeX`
|$\&$ `\&`|$\ldots$ `\ldots`|$\nabla$ `\nabla`
|$\_$ `\_`|$\vdots$ `\vdots`|$\infty$ `\infty`
|$\text{\textunderscore}$ `\text{\textunderscore}`|$\dotsb$ `\dotsb`|$\infin$ `\infin`
|$\text{--}$ `\text{--}`|$\dotsc$ `\dotsc`|$\checkmark$ `\checkmark`
|$\text{\textendash}$ `\text{\textendash}`|$\dotsi$ `\dotsi`|$\dag$ `\dag`
|$\text{---}$ `\text{---}`|$\dotsm$ `\dotsm`|$\dagger$ `\dagger`
|$\text{\textemdash}$ `\text{\textemdash}`|$\dotso$ `\dotso`|$\text{\textdagger}$ `\text{\textdagger}`
|$\text{\textasciitilde}$ `\text{\textasciitilde}`|$\sdot$ `\sdot`|$\ddag$ `\ddag`
|$`$ <code>`</code>|$\mathellipsis$ `\mathellipsis`|$\ddagger$ `\ddagger`
|$\text{\textquoteleft}$ `text{\textquoteleft}`|$\text{\textellipsis}$ `\text{\textellipsis}`|$\text{\textdaggerdbl}$ `\text{\textdaggerdbl}`
|$\lq$ `\lq`|$\Box$ `\Box`|$\Dagger$ `\Dagger`
|$\text{\textquoteright}$ `\text{\textquoteright}`|$\square$ `\square`|$\angle$ `\angle`
|$\rq$ `\rq`|$\blacksquare$ `\blacksquare`|$\measuredangle$ `\measuredangle`
|$\text{\textquotedblleft}$ `\text{\textquotedblleft}`|$\triangle$ `\triangle`|$\sphericalangle$ `\sphericalangle`
|$"$ `"`|$\triangledown$ `\triangledown`|$\top$ `\top`
|$\text{\textquotedblright}$ `\text{\textquotedblright}`|$\triangleleft$ `\triangleleft`|$\bot$ `\bot`
|$\colon$ `\colon`|$\triangleright$ `\triangleright`|$\$$ `\$`
|$\backprime$ `\backprime`|$\bigtriangledown$ `\bigtriangledown`|$\text{\textdollar}$ `\text{\textdollar}`
|$\prime$ `\prime`|$\bigtriangleup$ `\bigtriangleup`|$\pounds$ `\pounds`
|$\text{\textless}$ `\text{\textless}`|$\blacktriangle$ `\blacktriangle`|$\mathsterling$ `\mathsterling`
|$\text{\textgreater}$ `\text{\textgreater}`|$\blacktriangledown$ `\blacktriangledown`|$\text{\textsterling}$ `\text{\textsterling}`
|$\text{\textbar}$ `\text{\textbar}`|$\blacktriangleleft$ `\blacktriangleleft`|$\yen$ `\yen`
|$\text{\textbardbl}$ `\text{\textbardbl}`|$\blacktriangleright$ `\blacktriangleright`|$\surd$ `\surd`
|$\text{\textbraceleft}$ `\text{\textbraceleft}`|$\diamond$ `\diamond`|$\degree$ `\degree`
|$\text{\textbraceright}$ `\text{\textbraceright}`|$\Diamond$ `\Diamond`|$\text{\textdegree}$ `\text{\textdegree}`
|$\text{\P}$ `\text{\P}`|$\lozenge$ `\lozenge`|$\mho$ `\mho`
|$\text{\S}$ `\text{\S}`|$\blacklozenge$ `\blacklozenge`|$\diagdown$ `\diagdown`
|$\text{\sect}$ `\text{\sect}`|$\star$ `\star`|$\diagup$ `\diagup`
|$\copyright$ `\copyright`|$\bigstar$ `\bigstar`|$\flat$ `\flat`
|$\circledR$ `\circledR`|$\clubsuit$ `\clubsuit`|$\natural$ `\natural`
|$\text{\textregistered}$ `\text{\textregistered}`|$\clubs$ `\clubs`|$\sharp$ `\sharp`
|$\circledS$ `\circledS`|$\diamondsuit$ `\diamondsuit`|$\heartsuit$ `\heartsuit`
|$\text{\textcircled a}$ `\text{\textcircled a}`|$\diamonds$ `\diamonds`|$\hearts$ `\hearts`
|$\maltese$ `\maltese`|$\spadesuit$ `\spadesuit`|$\spades$ `\spades`

Direct Input: $£ ¥ ∇ ∞ · ∠ ∡ ∢ ♠ ♡ ♢ ♣ ♭ ♮ ♯ ✓ …  ⋮  ⋯  ⋱  !$ ‼

## Units

In KaTeX, units are proportioned as they are in TeX.<br>
KaTeX units are different than CSS units.

</div>
<div class="katex-cards" id="unit-tbl">

|  KaTeX Unit | Value       | KaTeX Unit  | Value  |
|:---|:---------------------|:---|:----------------|
| em | CSS em               | bp | 1/72​ inch × F × G|
| ex | CSS ex               | pc | 12 KaTeX pt|
| mu | 1/18 CSS em          | dd | 1238/1157​ KaTeX pt  |
| pt | 1/72.27 inch × F × G | cc | 14856/1157 KaTeX pt |
| mm | 1 mm × F × G         | nd | 685/642 KaTeX pt |
| cm | 1 cm × F × G         | nc | 1370/107​ KaTeX pt|
| in | 1 inch × F × G       | sp | 1/65536 KaTeX pt |

</div>

where:

<div style="margin-left: 1.5em;">

F = (font size of surrounding HTML text)/(10 pt)

G = 1.21 by default, because KaTeX font-size is normally 1.21 × the surrounding font size. This value can be overridden by the CSS of an HTML page.

</div>

The effect of style and size:

<div class="katex-cards" id="unit-blocks">

|  Unit  |     textstyle     | scriptscript |  huge  |
|:------:|:-----------------:|:------------:|:------:|
|em or ex|$\rule{1em}{1em}$  |$\scriptscriptstyle\rule{1em}{1em}$  |$\huge\rule{1em}{1em}$
| mu     |$\rule{18mu}{18mu}$|$\scriptscriptstyle\rule{18mu}{18mu}$|$\huge\rule{18mu}{18mu}$
| others |$\rule{10pt}{10pt}$|$\scriptscriptstyle\rule{10pt}{10pt}$|$\huge\rule{10pt}{10pt}$

</div>