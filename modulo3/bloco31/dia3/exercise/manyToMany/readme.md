# Exercício para aprendizado de relacionamentos

## esse exercício foi só para treinamento, não foi tomado nenhum rigor e não houve preocupação com boas práticas.

---

**Resolvi fazer esse exercício para treinar relacionamentos N:N no sequelize.**

- O objetivo aqui era salvar um novo `user` fazendo referência à tabela `role`.

- Aqui nesse exercício não é desejado que ao cadastrar um novo `user` seja cadastrado um novo `role`.
    * Se esse fosse o caso, bastava adicionar a linha abaixo.
```javascript
const amidala = await User.create({
    username: 'p4dm3',
    points: 1000,
    Roles: [{
      name: 'Queen',
      User_Role: {
        selfGranted: true,
        userId: 1,
        roleId: 3,
      }
    }]
  }, {
    include: Role,
  }
);
```
* Caso, o `role_id` não exista não deverá ser adicionado o novo `user`.