http://lucybain.com/blog/2014/attribute-vs-property/
https://stackoverflow.com/questions/5874652/prop-vs-attr/5884994#5884994
http://api.jquery.com/prop/
https://www.w3.org/TR/DOM-Level-2-HTML/html.html



What is an attribute?

Attributes are in the HTML itself, rather than in the DOM

If an element has a default value, the attribute shows the default value even if the value has changed.
<input type="text" name="username" value="user123">

Where both a property and an attribute with the same name exists, usually updating one will update the other, 
but this is not the case for certain attributes of inputs, such as value and checked: for these attributes, 
the property always represents the current state 
while the attribute (except in old versions of IE) corresponds to
the default value/checkedness of the input (reflected in the defaultValue / defaultChecked property).



Use prop() over attr() in the majority of cases.

A property is the current state of the input element. An attribute is the default value.

A property can contain things of different types. An attribute can only contain strings


Table 12.1. Cases where property names and attribute names differ

Attribute name        Property name

for                 	htmlFor
class               	className
readonly	            readOnly
maxlength	            maxLength
cellspacing	          cellSpacing
rowspan	              rowSpan
colspan	              colSpan
tabindex	            tabIndex
cellpadding	          cellPadding
usemap	              useMap
frameborder	          frameBorder
contenteditable	      contentEditable

<a href='foo.html' class='test one' name='fooAnchor' id='fooAnchor'>Hi</a>
Some gratuitous ASCII art (and leaving out a lot of stuff):

+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|             HTMLAnchorElement             |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| href:       "http://example.com/foo.html" |
| name:       "fooAnchor"                   |
| id:         "fooAnchor"                   |
| className:  "test one"                    |
| attributes:                               |
|    href:  "foo.html"                      |
|    name:  "fooAnchor"                     |
|    id:    "fooAnchor"                     |
|    class: "test one"                      |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+

Properties are generally simpler to deal with than attributes. An attribute value may only be a string 
whereas a property can be of any type. For example, the checked property is a Boolean, the style property is an object with individual
properties for each style, the size property is a number.
