    <template>
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">Editar Libro</h1>
            <form @submit.prevent="guardarCambios" class="space-y-4">
            <div>
                <label for="titulo" class="block text-sm font-medium text-gray-700">Título</label>
                <input type="text" v-model="actualizarLibro.titulo" id="titulo" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="autor" class="block text-sm font-medium text-gray-700">Autor</label>
                <input type="text"  v-model="actualizarLibro.autor" id="autor" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="genero" class="block text-sm font-medium text-gray-700">Género</label>
                <input type="text" v-model="actualizarLibro.genero" id="genero" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
                <input type="text" v-model="actualizarLibro.precio" id="precio" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required/>
            </div>
            <div class="flex items-center">
                <input type="checkbox" v-model="actualizarLibro.disponibilidad" id="disponibilidad" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                <label for="disponibilidad" class="ml-2 block text-sm text-gray-800">Disponible</label>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Guardar cambios
            </button>
            </form>
        </div>
        </div>
    </template>
    
    <script>
    import axios from "axios";
    import { ref, onMounted } from "vue";
    import { useRoute, useRouter } from "vue-router";
    
    export default {
        setup() {
        const actualizarLibro = ref({
            titulo: '',
            autor: '',
            genero: '',
            precio: '',
            disponibilidad: false
        });
    
        const route = useRoute();
        const router = useRouter();
    
        const obtenerLibro = async () => {
            try {
            const response = await axios.get(`http://localhost:3000/libros/${route.params.id}`);
            actualizarLibro.value = response.data;
            } catch (error) {
            console.log("Error al obtener el libro:", error);
            }
        };
    
        onMounted(() => {
            obtenerLibro();
        });
    
        const guardarCambios = async () => {
            try {
            await axios.put(`http://localhost:3000/libros/${route.params.id}`, actualizarLibro.value);
            alert("Libro actualizado correctamente.");
            router.push("/"); // Redirigir a la página principal después de guardar
            } catch (error) {
            console.log("Error al guardar los cambios:", error);
            }
        };
    
        return {
            actualizarLibro,
            guardarCambios
        };
        }
    };
    </script>
    