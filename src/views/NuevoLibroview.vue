    <template>
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">Agregar Nuevo Libro</h1>
            <form @submit.prevent="agregarLibro" class="space-y-4">
            <div>
                <label for="titulo" class="block text-sm font-medium text-gray-700">Título</label>
                <input type="text" v-model="nuevoLibro.titulo" id="titulo" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="autor" class="block text-sm font-medium text-gray-700">Autor</label>
                <input type="text" v-model="nuevoLibro.autor" id="autor" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="genero" class="block text-sm font-medium text-gray-700">Género</label>
                <input type="text" v-model="nuevoLibro.genero" id="genero" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
                <input type="text" v-model="nuevoLibro.precio" id="precio" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div class="flex items-center">
                <input type="checkbox" v-model="nuevoLibro.disponibilidad" id="disponibilidad" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                <label for="disponibilidad" class="ml-2 block text-sm text-gray-800">Disponible</label>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Agregar libro
            </button>
            </form>
        </div>
        </div>
    </template>
    
    <script>
    import { ref } from 'vue'
    import axios from 'axios'
    
    export default {
        setup() {
        const nuevoLibro = ref({
            titulo: '',
            autor: '',
            genero: '',
            precio: '',
            disponibilidad: false,
        })
    
        const agregarLibro = async () => {
            try {
            await axios.post('http://localhost:3000/libros', nuevoLibro.value)
            alert('Libro agregado correctamente')

            nuevoLibro.value = {
                titulo: '',
                autor: '',
                genero: '',
                precio: '',
                disponibilidad: false,
            }
            } catch (error) {
            console.log('Error al agregar el libro', error)
            }
        }
    
        return {
            nuevoLibro,
            agregarLibro,
        }
        },
    }
    </script>
    