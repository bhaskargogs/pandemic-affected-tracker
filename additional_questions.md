
# Additional Questions

1. How long did you spend on the coding test? What would you add to your solution if you had more time?

**Ans**: I spent a total of 4 days on the coding test. If I had more time, I would have done the following:
 ```
 (a) I would have added a zip code which could deduce the district based on it
 
 (b) Added a custom value for days if the user wants to see anything other than the days mentioned in the application

 (c) Implement sentry to check performance
```
2. What alternative approaches/solutions to the user story did you consider when engineering your solution? What benefits/downsides would they have had compared to the selected solution?

**Ans**: At first, I went on the approach of implementing the visualization using Bar graphs. the visualizations would have been clear and the data would have been nice.

The downside to this approach is that it is very hard to read when data increases and also it would be hard to keep track of the incidence rate. But, if we change color by putting a limit (e.g change color to red when incidence rate > 100), it does look slightly better, but still harder to read.

3. What additional features/improvements do you think could help the customer gain more value from your application?

**Ans**: I would implement the additional features/improvements which could help the customer gain more value from my application:

```
(a) Added a Zip code as an alternative to district to suggest the nearest and safest district hospitals

(b) Added a map and would suggest the user the nearest and safest district hospitals based on the zip code

(c) Asked the favorite place (zip code) and would present all the possible safest district hospitals based on the zip code
```

4. Where do you see issues in your code that might cause issues in the future? How would you monitor the performance of your app?

**Ans**: The biggest issue I see in my code is rendering data when I change the district and/or the days selected as it takes some milliseconds to rerender the graph which could affect in the future. 

I would use the app [Sentry](https://sentry.io/) to monitor the performance of my app


5. How would you improve the API that you just used or its documentation?
   
**Ans**: The problem that I had on the API is the limited amount of data I receive per request in a minute or so. In some cases, I had to wait a minute or two to fetch the data from API.

I would remove the limit from API and make sure that whoever uses the API has an account or be registered to provide unique token to access the API
   

6. What did you think about this test? How interesting was it for you? How would you recommend us to improve the test?

**Ans**: This test was really good and challenging. It was interesting for me because it presented me to create tasks for the story and estimate the amount of time I have to spend on each task. I recommend the introduction of test to have less words.

