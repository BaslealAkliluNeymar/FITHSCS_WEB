import z from 'zod';


const vehicleSchema = z.object({
    name: z.string().min(1, "Vehicle name is required"),
    type: z.enum(['car', 'truck', 'motorcycle'], {
        errorMap: () => ({ message: "Invalid vehicle type" })
    }),
    year: z.number().min(1886, "Invalid year").max(new Date().getFullYear(), "Invalid year"),
    color: z.string().min(3, "Color must be at least 3 characters long")
})


export type Vehicle = z.infer<typeof vehicleSchema>;