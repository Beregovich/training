/*
Task
You are a lonely frog.

You live on a coordinate axis.

The meaning of your life is to jump and jump ..

The only rule is that each jump is 1 units more than the last time.

Now, here comes your new task. Your starting point is 0, the target point is n.

Your first jump distance is 1, and the second step is 2, and so on ..

Of course, you can choose to jump forward or jump backward.

You need to jump to the target point with minimal steps. Please tell me, what's the minimal steps?
*/
function jumpTo(n) {
  let t = Math.abs(n), count = 0;
  for (let pos = 0; pos < t || (pos - t) % 2; count++, pos += count) { }
  return count;
}
