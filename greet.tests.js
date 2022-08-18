describe('The greet function', function(){

    it('It should return "Hello, Andrew" when Andrew is greeted', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });

    it('It should return "Hello, Karen" when Karen is greeted', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });

   it('It should return "Hello, Itumeleng" when Itumeleng is greeted', () => {
       assert.equal(greet('Itumeleng'), 'Hello, Itumeleng');
   });
       
});