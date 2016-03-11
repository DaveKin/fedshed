/**
 * @group Toolkit
 * @component Documents
 */
# Toolkit

The key principle in building the toolkit is that it produces no output on it's own. The toolkit mixins are used only to build styles for component elements in a consistent manner and to enable a better workflow from design to production code.

The toolkit is built as a set of mixins. I experimented with using sass silent placeholders but found that though it produces smaller css files, the results are less organised (harder to debug) and occasionally produces unexpected results in the form of duplicated blocks of css. Using a purely mixin based approach produces larger css files but with fewer selectors and the unminified source code is much easier to debug. 

Fortunately the css-clean minifier merges many of the selectors to re-gain the advantages of using the placeholder extend method of building so we get the best of both techniques. Some experiments need to be done to check the gzipped sizes of the css with and without the merging enabled - there is evidence that there may be little advantage to merging selectors in terms of compressed filesize whereas the merging process does increase the number of selectors in the stylesheets.

The toolkit includes a default set of core style variables so that each site does not need to provide values for every core variable, the defaults are used as a fallback for any value which has not been defined.

# Further development

Once the toolkit is in use, any further development needs to be handled with care. Changing the toolkit is similar to making changes to ```common``` in the current elysium structure.

e.g. When adding new parameters to an existing mixin, always add them at the end of the parameter list and provide a default value. This will ensure that the mixin will continue to work for any existing usage.

``` scss
/* This mixin needs $param3 adding to it */
@mixin do-something($param1: 1px, $param2: #fff ){
    // ...
}

/* Do not change to any of these */

@mixin do-something($param3, $param1: 1px, $param2: #fff ){
    // new param has no default and is not at the end
}

@mixin do-something($param1: 1px, $param3: 10px, $param2: #fff ){
    // new param is not at the end
}

@mixin do-something($param1: 1px, $param2: #fff, $param3 ){
    // new param has no default value
}

/* Do it like this */

@mixin do-something($param1: 1px, $param2: #fff, $param3: 10px ){
    // new param IS at the end AND has a default value
}

```

Another way around this would be to standardise on specifying parameter names when including a mixin, that way the parameter order is no longer a concern.
e.g.

``` scss
// don't do this
@include my-mixin(2, 4, value);

//do this
@include my-mixin($param1: 2, $param2: 4, param3: value);

```
