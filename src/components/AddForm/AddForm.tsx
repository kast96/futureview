import { useState } from 'react'
import { PlusIcon } from '../ui/icons/Icons'
import s from './AddForm.module.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { itemsAPI } from '../../api/items-api'
import { ItemType } from '../../types/types'
import { fetchItems } from '../../redux/slices/items'

export const AddForm = () => {
	const dispatch = useDispatch()
	
	const onSubmitHandler = async (item: ItemType) => {
		await itemsAPI.create(item)
		//@ts-ignore
		dispatch(fetchItems())
	}

	const [isOpenPopup, setIsOpenPopup] = useState(false)

	const toggleIsOpenPopup = () => {
		setIsOpenPopup(value => !value)
	}

	return (
		<div>
			<div className={[s.popup, isOpenPopup && 'is-open'].join(' ')}>
				<div className={s.overlay} onClick={toggleIsOpenPopup}></div>
				<div className={s.inner}>
				<Formik
					initialValues={{ title: '', category: 'films', image: '', isViewed: false }}
					validate={values => {
						const errors = {}
						if (!values.title) {
							//@ts-ignore
							errors.title = 'Заполните название'
						}
						if (!(['films', 'series', 'games'].includes(values.category))) {
							//@ts-ignore
							errors.category = 'Неверно указана категория'
						}
						return errors
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						if (!['films', 'series', 'games'].includes(values.category)) return

						onSubmitHandler({
							title: values.title,
							//@ts-ignore
							category: values.category,
							image: values.image,
							isViewed: values.isViewed,
						})
						resetForm()
						setSubmitting(false)
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<div className={s.field}>
								<Field type="text" name="title" placeholder="Название" />
								<ErrorMessage name="title" component="div" className={s.error} />
							</div>
							<div className={s.field}>
								<Field type="text" name="category" placeholder="Раздел" as="select">
									<option value="films">Фильмы</option>
									<option value="series">Сериалы</option>
									<option value="games">Игры</option>
								</Field>
								<ErrorMessage name="category" component="div" />
							</div>
							<div className={s.field}>
								<Field type="text" name="image" placeholder="Путь к изображению" />
								<ErrorMessage name="image" component="div" />
							</div>
							<div className={s.field}>
								<label>
									<Field type="checkbox" name="isViewed" />
									Просмотрено
									<ErrorMessage name="isViewed" component="div" />
								</label>
							</div>
							
							<button type="submit" disabled={isSubmitting} className={s.submit}>Добавить</button>
						</Form>
					)}
				</Formik>
				</div>
			</div>
			<button className={[s.button, isOpenPopup && 'is-open'].join(' ')} onClick={toggleIsOpenPopup}>
				<PlusIcon />
			</button>
		</div>
	)
}