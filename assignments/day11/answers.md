### 1. Explain why we put each consecutive call inside the onSuccess callback of the previous database call, instead of just placing them next to each other.

We use the onSuccess callback function because the functions getTotalNumberOfGames, getTotalNumberOfWins and getTotalNumberOf21 are asynchronous. They only way to know that results have successfully been retrieved from their call is when they call onSuccess callback function.

### 2. What does the done parameter do in server.api-test.js?

Done has similar functionality of a callback function to notify Jest that a test is done. The done parameter is used to signal that test is done and it will signal done both when the test is successfull and when it fails. But it is used differently in case of fail or success to explicitly signal wheter the test was successfull.
