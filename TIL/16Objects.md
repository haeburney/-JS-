# Objects

### 데이터를 정리하는데 아주 좋은 방식 <br>
하지만 이건 리스트가 아니다. 리스트는 모든 값이 같은 의미를 담고 있다.

```
const player = {
    Name : "haeburney",
    points : 12,
}


console.log(player.points);
console.log(player["points"]);
```
<br>
<img src="https://user-images.githubusercontent.com/76997276/170810884-6a8ea8e2-3ed4-4c5a-8ab1-6b8bc4589425.png"> 
console.log(player.points); <br>
console.log(player["points"]); <br>
-> 같은 결과를 가져온다. <br><br><br><br>

### 어라라?
```
const player = {
    Name : "haeburney",
    points : 12,
}

console.log(player);

player.points = 100;
console.log(player);
```
<br> const 속성 : 값 변경 불가 <br>
하지만 constant 안의 무언가를 변경하려 할 때는 변경 가능하다.<br><br><br><br>

### Object 안에 요소 추가 가능한가?
가능하다!
```
const player = {
    Name : "haeburney",
    points : 12,
}

console.log(player);

player.lastname = "떡볶희";
console.log(player);
```
<img src="https://user-images.githubusercontent.com/76997276/170811133-ce1ff75a-4360-4fd7-9fda-d9ca3ab8fc69.png" width=500>
