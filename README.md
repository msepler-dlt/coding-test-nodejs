## Scenario

Imagine you're pairing with a junior dev and have been tasked with the following.  Your pair (the interviewer) will also
act as product owner, so you can ask any questions to clarify requirements.

The exercise is timeboxed; assessment is based not on completing the test in time, but on how you approach the problem
when pairing.  Consider this as if each requirement below was a separate ticketed business requirement, and you were
implementing production-quality code accordingly.


### Task 1: Count files in given directory tree

Write a function to count files in a given directory tree. Skeleton code is available in [fileCounter.js](fileCounter.js), 
and a sample test is available in [test/fileCounter.spec.js](test/fileCounter.spec.js).

Example expected results, using command-line utils that perform the same function:

```
 $ find resources/filecount-simple -type f | wc -l
 2

 $ find resources/filecount-complex -type f | wc -l
 12

 $ find resources/sample-app -type f | wc -l
 11 or 2359, depending on if you've yet run `yarn install` on the package.json files within
```


### Task 2: Count lines in given directory tree

Count lines in directory tree. Implement solution in [lineCounter.js](lineCounter.js). 

Example expected results, using command-line utils that perform the same function:

 ```
 $ find resources/filecount-simple -type f -exec cat {} + | wc -l
 10

 $ find resources/filecount-complex -type f -exec cat {} + | wc -l
 16

 $ find resources/sample-app -type f -exec cat {} + | wc -l
 643 or 439577, depending on if you've yet run `yarn install` on the package.json files within
 ```


### Task 3: Count code/whitespace/comments of JavaScript code in directory tree

Example expected results, using command-line utils that perform the same function:

 ```
 $ cloc resources/chat-app
 -------------------------------------------------------------------------------
 Language                     files          blank        comment           code
 -------------------------------------------------------------------------------
 JavaScript                    2359          60218          27374         351965
 ```


### Task 4: Count code/whitespace/comments for given languages in directory tree

Specifically count code, whitespace, and comments for specified languages only in given directory tree.
