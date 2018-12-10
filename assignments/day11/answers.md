### 1. Explain why we put each consecutive call inside the onSuccess callback of the previous database call, instead of just placing them next to each other.

We use the onSuccess callback function because the functions getTotalNumberOfGames, getTotalNumberOfWins and getTotalNumberOf21 are asynchronous. They only way to know that results have successfully been retrieved from their call is when they call onSuccess callback function.

### what does the done parameter do in server.api-test.js?
