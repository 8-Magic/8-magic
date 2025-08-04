# Notes

## Ball click algorithm

1. user clicks on ball
2. answer object fetched from api

   1. IF error on fetch:

      1. console.error the error
      2. alert the user
      3. return nothing

3. IF posiible:

   1. ball turns over (dedicated black space is in the back of the ball)
   2. answerbox fades in the dedicated (black) space w/ text
   3. IF user clicks again:

      1. answerbox fades out
      2. new answerbox fades in

4. IF NOT possible:

   1. '8' fades out
   2. dedicated space fades in
   3. answerbox fades in w/ text
   4. IF user clicks again:

      1. answerbox fades out
      2. new answerbox fades in

---
