import Students from "./Students.js";
import Node from "./Node.js";

class Bst {
    #root;

    constructor() {
        this.#root = null;
    }

    addNode(name, matricula, age) {
        const validar = this.searchNodeByMatricula(this.#root, matricula);
        if (validar) {
            return;
        }
        else if (name && matricula && age) {
            const alum = new Students(name, matricula, age);
            const newnode = new Node(alum);
            this.addroot(newnode);
            return true;
        }
        return false
    }

    addroot(newnode) {
        try {
            if (this.#root === null) {
                this.#root = newnode;
            } else {
                this.insertNode(this.#root, newnode);
            }
        } catch (error) {
            console.error(error);
        }
    }

    insertNode(node, newnode) {
        if (newnode.value.matricula < node.value.matricula) {
            if (node.left === null) {
                node.left = newnode;
            } else {
                this.insertNode(node.left, newnode);
            }
        } else {
            if (node.right === null) {
                node.right = newnode;
            } else {
                this.insertNode(node.right, newnode);
            }
        }
    }
    searchNodeByMatricula(node, matricula) {
        if (node === null) {
            return null;
        }
        if (matricula < node.value.matricula) {
            return this.searchNodeByMatricula(node.left, matricula);
        } else if (matricula > node.value.matricula) {
            return this.searchNodeByMatricula(node.right, matricula);
        } else {
            return node;
        }
    }

    search(matricula) {
        return this.searchNodeByMatricula(this.#root, matricula);
    }

    inOrder(node, callback) {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }

    printInOrder() {
        const result = [];
        this.inOrder(this.#root, (student) => {
            result.push(student);
        });
        return result
    }

    findMinNode(node) {
        if (node === null) {
            return null;
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
    
    printMin() {
        const minNode = this.findMinNode(this.#root);
        if (minNode !== null) {
            return minNode
        } else {
            console.log("El árbol está vacío.");
        }
    }
    
    findMaxNode(node) {
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }
    
    printMax() {
        const maxNode = this.findMaxNode(this.#root);
        if (maxNode !== null) {
            return maxNode;
        } else {
            console.log("El árbol está vacío.");
        }
    }
    
}

export default Bst;