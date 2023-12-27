const asteroidCollision = asteroids => {
    let stack = []
    for ( let a of asteroids ) {
        if ( a < 0 ) {
            while ( stack.at(-1) > 0 && stack.at(-1) < -a ) stack.pop()
            if ( stack.at(-1) + a == 0 && stack.pop() ) continue
            if ( stack.at(-1) > 0 && stack.at(-1) > -a ) continue
        }
        stack.push(a)
    }
    return stack
}
