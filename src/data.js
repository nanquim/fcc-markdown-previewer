const default_text = '# Markdown syntax guide\n'+
'\n'+
'## Headers\n'+
'\n'+
'# This is a Heading h1\n'+
'## This is a Heading h2 \n'+
'###### This is a Heading h6\n'+
'\n'+
'## Emphasis\n'+
'\n'+
'*This text will be italic*  \n'+
'_This will also be italic_\n'+
'\n'+
'**This text will be bold**  \n'+
'__This will also be bold__\n'+
'\n'+
'_You **can** combine them_\n'+
'\n'+
'## Lists\n'+
'\n'+
'### Unordered\n'+
'\n'+
'* Item 1\n'+
'* Item 2\n'+
'* Item 2a\n'+
'* Item 2b\n'+
'\n'+
'### Ordered\n'+
'\n'+
'1. Item 1\n'+
'1. Item 2\n'+
'1. Item 3\n'+
'  1. Item 3a\n'+
'  1. Item 3b\n'+
'\n'+
'## Images\n'+
'\n'+
'![This is a alt text.](sample.jpg "This is a sample image.")\n'+
'\n'+
'## Links\n'+
'\n'+
'You may be using [Markdown Live Preview](https://nanquim.github.io/fcc-reactjs-random-quote-machine/).\n'+
'\n'+
'## Blockquotes\n'+
'\n'+
'> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n'+
'>\n'+
'>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n'+
'\n'+
'## Tables\n'+
'\n'+
'| First | Second |\n'+
'| ----- | :----- |\n'+
'|   a   |    b   |\n'+
'|   c   |    d   |\n'+

'## Blocks of code\n'+
'\n'+
'```\n'+
'let message = \'Hello world\';\n'+
'alert(message);\n'+
'```\n'+
'\n'+
'## Inline code\n'+
'\n'+
'This web site is using `react-markdown`.';

export default default_text;
