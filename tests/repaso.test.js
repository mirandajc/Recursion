const expect = require('chai').expect;

const {
    Queue,
    isPalindrome,
} = require('../Repaso.js');

describe('Tests de repaso.', function () {
    describe('Recursion', function () {
        describe('EJERCICIO A', function () {
            it('deberia devolver true si el numero es palidromo', () => {
                expect(isPalindrome(555)).to.equal(true);
                expect(isPalindrome(2002)).to.equal(true);
                expect(isPalindrome(35000000053)).to.equal(true);
                expect(isPalindrome(25455452)).to.equal(true);
            });
            it('deberia devolver false si el numero no es palindromo', () => {
                expect(isPalindrome(123)).to.equal(false);
                expect(isPalindrome(55667)).to.equal(false);
                expect(isPalindrome(400045)).to.equal(false);
                expect(isPalindrome(1000003)).to.equal(false);
            });
            it('deberia devolver null si el numero es negativo o posee digitos decimales', () => {
                expect(isPalindrome(-123)).to.equal(null);
                expect(isPalindrome(-33233)).to.equal(null);
                expect(isPalindrome(1.555)).to.equal(null);
                expect(isPalindrome(2.2)).to.equal(null);
            });
        });
    });

    describe('Recursion y Stack', function () {
        describe('EJERCICIO B', function () {
            let queue;

            beforeEach(() => {
                queue = new Queue();
            });
            it('la funcion deberia dar vuelta el stack, Test 1', () => {
                queue.enqueue(1);
                queue.enqueue(2);
                queue.enqueue(3);
                queue.enqueue(4);
                expect(queue.reverseStack()[0]).to.equal(4);
                expect(queue.reverseStack()[1]).to.equal(3);
                expect(queue.reverseStack()[2]).to.equal(2);
                expect(queue.reverseStack()[3]).to.equal(1);
            });
            it('la funcion deberia dar vuelta el stack, Test 2', () => {
                queue.enqueue(12);
                queue.enqueue(33);
                queue.enqueue(22);
                queue.enqueue(4);
                expect(queue.reverseStack()[0]).to.equal(4);
                expect(queue.reverseStack()[1]).to.equal(22);
                expect(queue.reverseStack()[2]).to.equal(33);
                expect(queue.reverseStack()[3]).to.equal(12);
            });
        });
    });
});
