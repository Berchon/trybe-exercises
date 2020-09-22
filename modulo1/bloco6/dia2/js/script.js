let date = document.getElementById('date').DatePickerX.init({
		format: 'dd/mm/yyyy',
		mondayFirst: false,
		weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
		singleMonthLabels: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro',
		],
		todayButtonLabel: 'Hoje',
		clearButtonLabel: 'Limpar'
});